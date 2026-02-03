import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Categoria } from "./Categoria.js";

@Entity("produtos")
export class Produto {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("varchar")
    nome!: string;

    @Column("text", { nullable: true })
    descricao?: string;

    @Column("decimal", { precision: 10, scale: 2 })
    preco!: number;

    @Column("int")
    estoque!: number;

    @CreateDateColumn()
    dataCriacao!: Date;

    @UpdateDateColumn()
    dataAtualizacao!: Date;

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, { onDelete: "CASCADE" })
    categoria!: Categoria;
}
