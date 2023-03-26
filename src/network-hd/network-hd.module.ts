import { Module } from '@nestjs/common';
import { TelnetCommsServiceService } from './telnet-comms-service/telnet-comms-service.service';
import { NetworkHdGateway } from './network-hd/network-hd.gateway';

@Module({
  providers: [TelnetCommsServiceService, NetworkHdGateway]
})
export class NetworkHdModule {}
