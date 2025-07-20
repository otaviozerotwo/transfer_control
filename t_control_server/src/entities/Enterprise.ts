import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { NFe } from './NFe';

@Entity('tb_enterprise')
export class Enterprise {
  @PrimaryGeneratedColumn({ name: 'cd_enterprise' })
  id: number;

  @Column({ type: 'varchar', length: 14, unique: true })
  cnpj: string;
  
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 50, default: 'active' })
  status: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column()
  addressNumber: number;

  @Column({ type: 'varchar', length: 255 })
  neighborhood: string;

  @Column({ type: 'varchar', length: 100 })
  cep: string;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  addressLatitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  addressLongitude: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => NFe, (nfe) => nfe.enterprise)
  nfes: NFe[];
}