import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

import { TelnetCommsServiceService  } from './telnet-comms-service.service';

@WebSocketGateway()
export class NetworkHDGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private readonly telnetCommsService: TelnetCommsService) {}

  afterInit(server: Server) {
    console.log('NetworkHDGateway initialized');
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('getDeviceList')
  async onGetDeviceList(client: Socket, data: any) {
    const deviceList = await this.telnetCommsService.getDeviceList().toPromise();
    client.emit('deviceList', deviceList);
  }
}

