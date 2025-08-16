import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Enterprise } from './Enterprise';
import { Volume } from './Volume';
import { NFeStatus } from '../enums/NFeStatus';

@Entity('tb_nfe')
export class NFe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nr_nfe' })
  numNfe: number;

  @Column({ name: 'authorization_key', type: 'varchar', length: 44, unique: true })
  authorizationKey: string;

  @Column({ type: 'enum', enum: NFeStatus, default: NFeStatus.PENDING })
  status: NFeStatus;

  @Column({ name: 'dt_emission', type: 'timestamp' })
  dtEmission: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Enterprise, (enterprise) => enterprise.nfesIssued)
  issuer: Enterprise;

  @ManyToOne(() => Enterprise, (enterprise) => enterprise.nfesReceived)
  recipient: Enterprise;

  @OneToMany(() => Volume, (volume) => volume.nfe, { cascade: true })
  volume: Volume[];
}