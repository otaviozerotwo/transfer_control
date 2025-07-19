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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => NFe, (nfe) => nfe.enterprise)
  nfes: NFe[];
}