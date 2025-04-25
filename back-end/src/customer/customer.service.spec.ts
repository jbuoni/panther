import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Customer } from '../model/customer.entity';
import { Repository } from 'typeorm';

describe('CustomerService', () => {
  let service: CustomerService;
  let repo: Repository<Customer>;

  const mockCustomerRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomerService,
        {
          provide: getRepositoryToken(Customer),
          useValue: mockCustomerRepository,
        },
      ],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
    repo = module.get<Repository<Customer>>(getRepositoryToken(Customer));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of customers', async () => {
      const mockCustomers = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
      mockCustomerRepository.find.mockResolvedValue(mockCustomers);

      const result = await service.getAll();

      expect(result).toEqual(mockCustomers);
      expect(mockCustomerRepository.find).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if no customers are found', async () => {
      mockCustomerRepository.find.mockResolvedValue([]);

      const result = await service.getAll();

      expect(result).toEqual([]);
      expect(mockCustomerRepository.find).toHaveBeenCalledTimes(1);
    });
  });
});
