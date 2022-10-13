import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Experiments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  device: string;

  @Column()
  button_color: string;

  @Column()
  price: number;
}
