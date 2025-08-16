import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { NFe } from './NFe';
import { EnterpriseType } from '../enums/EnterpriseType';

@Entity('tb_enterprise')
export class Enterprise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 14, unique: true })
  cnpj: string;
  
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 50, default: 'active' })
  status: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ name: 'address_number' })
  addressNumber: number;

  @Column({ type: 'varchar', length: 255 })
  neighborhood: string;

  @Column({ type: 'varchar', length: 100 })
  cep: string;

  @Column({ name: 'address_latitude', type: 'decimal', precision: 10, scale: 7 })
  addressLatitude: number;

  @Column({ name: 'address_longitude', type: 'decimal', precision: 10, scale: 7 })
  addressLongitude: number;

  @Column({ type: 'enum', enum: EnterpriseType, default: EnterpriseType.ISSUER_RECIPIENT })
  type: EnterpriseType;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => NFe, (nfe) => nfe.issuer)
  nfesIssued: NFe[]; // NOTAS EMITIDAS
  
  @OneToMany(() => NFe, (nfe) => nfe.recipient)
  nfesReceived: NFe[]; // NOTAS RECEBIDAS
}