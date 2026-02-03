import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity("categorias")
export class Categoria {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("varchar", { unique: true })
    nome!: string;

    @Column("text", { nullable: true })
    descricao?: string;

    @CreateDateColumn()
    dataCriacao!: Date;

    @UpdateDateColumn()
    dataAtualizacao!: Date;

    @OneToMany("Produto", (produto: any) => produto.categoria)
    produtos!: any[];
}
