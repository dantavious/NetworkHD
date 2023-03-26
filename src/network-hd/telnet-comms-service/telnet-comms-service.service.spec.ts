import { Test, TestingModule } from '@nestjs/testing';
import { TelnetCommsServiceService } from './telnet-comms-service.service';

describe('TelnetCommsServiceService', () => {
  let service: TelnetCommsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelnetCommsServiceService],
    }).compile();

    service = module.get<TelnetCommsServiceService>(TelnetCommsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
