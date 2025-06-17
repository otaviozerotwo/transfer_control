import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number; // TODO: mudar para uuid
}