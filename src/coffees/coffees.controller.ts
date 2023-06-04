import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }
  // nested route usage
  // @Get('flavors')
  // findAllFlavors() {
  //   return 'This action returns all coffees flavors';
  // }
}
