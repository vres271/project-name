import { ApiProperty } from '@nestjs/swagger';
import { BeforeInsert } from 'typeorm';

export class CreateEventDto {
    
    @ApiProperty()
    type: number;
  
    @ApiProperty()
    t: string;
  
    @ApiProperty()
    value: string;
  }