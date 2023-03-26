import { Test, TestingModule } from '@nestjs/testing';
import { NetworkHdGateway } from './network-hd.gateway';

describe('NetworkHdGateway', () => {
  let gateway: NetworkHdGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworkHdGateway],
    }).compile();

    gateway = module.get<NetworkHdGateway>(NetworkHdGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
