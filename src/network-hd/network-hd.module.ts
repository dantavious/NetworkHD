import { Module } from '@nestjs/common';
import { TelnetCommsServiceService } from './telnet-comms-service/telnet-comms-service.service';
import { NetworkHDGateway } from './network-hd/network-hd.gateway';

@Module({
  providers: [TelnetCommsServiceService, NetworkHDGateway]
})
export class NetworkHdModule {}
