import { Column,  Entity, PrimaryGeneratedColumn,  CreateDateColumn,  UpdateDateColumn } from 'typeorm';

@Entity('categoria')
export class Categoria {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ nullable: false, type: "varchar", unique: true})
    nome!: string;

    @Column({ type: "varchar", nullable: true })
    descricao!: string;

    @Column({ type: "datetime"})
    dataCriacao!: Date;

    @Column({ type: "datetime"})
    dataAtualizacao!: Date;


}