import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats = [];

  create(cat: CreateCatDto) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}
