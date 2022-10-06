import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
    @ApiProperty()
    type: number;
  
    @ApiProperty()
    t: number;
  
    @ApiProperty()
    value: string;
  }