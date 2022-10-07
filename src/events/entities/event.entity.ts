import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", width: 3 })
  type: number;

  @Column({ type: 'datetime' })
  t: string;

  @Column({ type: "varchar", width: 200 })
  value: string;
}