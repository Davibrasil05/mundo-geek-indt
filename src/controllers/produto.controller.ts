import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Categoria } from "./Categoria.js"; 

@Entity("produtos")
export class Produto {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  nome!: string;

  @Column({ nullable: true })
  descricao?: string;

  @Column("decimal")
  preco!: number;

  @Column("int")
  estoque!: number;

  @CreateDateColumn()
  dataCriacao!: Date;

  @UpdateDateColumn()
  dataAtualizacao!: Date;


  @ManyToOne(() => Categoria, (categoria: Categoria) => categoria.produtos, { onDelete: "CASCADE" })
  categoria!: Categoria;
}