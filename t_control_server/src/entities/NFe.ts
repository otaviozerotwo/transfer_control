import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Enterprise } from './Enterprise';
import { Volume } from './Volume';

@Entity('tb_nfe')
export class NFe {
  @PrimaryGeneratedColumn({ name: 'cd_nfe' })
  id: number;

  @Column({ name: 'nr_nfe' })
  numNfe: number;

  @Column({ type: 'varchar', length: 44, unique: true })
  authorizationKey: string;

  @Column()
  dtEmission: Date;

  @Column()
  dtEntry: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Enterprise, (enterprise) => enterprise.nfes)
  enterprise: Enterprise;

  @OneToMany(() => Volume, (volume) => volume.nfe)
  volume: Volume[];
}