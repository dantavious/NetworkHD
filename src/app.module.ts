import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NetworkHdModule } from './network-hd/network-hd.module';

@Module({
  imports: [NetworkHdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
