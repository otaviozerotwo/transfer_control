import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { NFe } from './NFe';
import { VolumeStatus } from '../enums/VolumeStatus';

@Entity('tb_volume')
export class Volume {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nr_volume', unique: true })
  nrVolume: number;

  @Column({ type: 'enum', enum: VolumeStatus, default: VolumeStatus.PENDING })
  status: VolumeStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => NFe, (nfe) => nfe.volume, { onDelete: 'CASCADE' })
  nfe: NFe;
}