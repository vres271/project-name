import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemEvent {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", width: 3 })
  type: number;

  @Column({ type: 'datetime', default:null })
  t: string;

  @Column({ type: "varchar", width: 200 })
  value: string;

  @Column({ type: "bit", width: 1 , default:false})
  fired: boolean;


}