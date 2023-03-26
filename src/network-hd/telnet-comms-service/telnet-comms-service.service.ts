import { Injectable } from '@nestjs/common';
import { TelnetClient } from 'tnode-telnet-client';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Injectable()
export class TelnetCommsServiceService {

 private client: TelnetClient;

  constructor() {
    this.client = new TelnetClient();
  }

  connect(): Observable<void> {
    const options = {
      host: '192.168.1.28',
      port: 23, // Replace with the appropriate port number if different
      timeout: 5000,
    };

    return from(this.client.connect(options));
  }

  getDeviceList(): Observable<string> {
    return this.connect().pipe(
      mergeMap(async () => {
        await this.client.write('config get devicelist\r\n');
        const response = await this.client.waitfor(/.+/);
        await this.client.end();
        return response;
      }),
    );
  }
}
