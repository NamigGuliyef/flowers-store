import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
  findAll() {
    return [
      {
        name: 'Rose',
        color: 'Red',
        price: '5',
      },
      {
        name: 'Rose',
        color: 'Red',
        price: '5',
      },
    ];
  }
}
