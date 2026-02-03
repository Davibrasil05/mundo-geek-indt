import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('produto')
export class Produto {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ nullable: false, type: "varchar"})
    nome!: string;

    @Column({ type: "varchar", nullable: true })
    descricao!: string;

    @Column({ type: "number"})
    preco!: number;

    @Column({ type: "number"})
    estoque!: number;

    @Column({ type: "datetime"})
    dataCriacao!: Date;

    @Column({ type: "datetime"})
    dataAtualizacao!: Date;

    @Column({ type: "string"})
    categoria!: string;



}