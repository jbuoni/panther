import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

describe('CustomerController', () => {
  let controller: CustomerController;
  let service: CustomerService;

  beforeEach(async () => {
    const mockCustomerService = {
      getAll: jest.fn().mockResolvedValue([{ id: 1, name: 'John Doe' }]),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [{ provide: CustomerService, useValue: mockCustomerService }],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all customers', async () => {
    const result = await controller.getAll();
    expect(result).toEqual({
      customers: [{ id: 1, name: 'John Doe' }],
      hasMore: false,
    });
    expect(service.getAll).toHaveBeenCalled();
  });
});
