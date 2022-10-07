import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemEvent {
  @BeforeInsert()
  unixTimeToDatetime() {
    console.log(this.t)
    if(this.t) {
      this.t = new Date(this.t).toISOString().slice(0, 19).replace('T', ' ');
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", width: 3 })
  type: number;

  @Column({ type: 'datetime' })
  t: string;

  @Column({ type: "varchar", width: 200 })
  value: string;

  @Column({ type: "bit", width: 1 })
  fired: boolean;


}