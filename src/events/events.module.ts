import { ItemEvent } from './entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEvent])],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
