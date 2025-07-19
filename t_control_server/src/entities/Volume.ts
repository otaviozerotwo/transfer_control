import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { NFe } from "./NFe";

@Entity('tb_volume')
export class Volume {
  @PrimaryGeneratedColumn({ name: 'cd_volume' })
  id: number;

  @Column({ name: 'nr_volume', unique: true })
  nrVolume: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => NFe, (nfe) => nfe.id)
  nfe: NFe;
}