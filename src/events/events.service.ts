import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemEvent } from './entities/event.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(ItemEvent)
    private eventsRepository: Repository<ItemEvent>,
  ) {}
  

  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsRepository.create(createEventDto);
  }


  findAll(): Promise<ItemEvent[]> {
    return this.eventsRepository.find();
  }

  findOne(id: number): Promise<ItemEvent> {
    return this.eventsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.eventsRepository.delete(id);
  }


  // findAll() {
  //   return `This action returns all events`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} event`;
  // }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} event`;
  // }
}
