import { appDataSource } from "../database/appDataSource.js";
import { Produto } from "../entities/Produto.js";
import { Categoria } from "../entities/Categoria.js";

export class ProdutoService {
    private repository = appDataSource.getRepository(Produto);
    private categoriaRepository = appDataSource.getRepository(Categoria);

    async getAll(): Promise<Produto[]> {
        return await this.repository.find({ relations: ["categoria"] });
    }

    async getById(id: string): Promise<Produto | null> {
        return await this.repository.findOne({ where: { id }, relations: ["categoria"] });
    }

    async create(data: any): Promise<Produto> {
        const { categoriaId, ...produtoData } = data;
        const categoria = await this.categoriaRepository.findOneBy({ id: categoriaId });
        if (!categoria) throw new Error("Categoria não encontrada");

        const produto = this.repository.create({ ...produtoData, categoria } as any) as unknown as Produto;
        return await this.repository.save(produto);
    }

    async update(id: string, data: any): Promise<Produto> {
        const produto = await this.getById(id);
        if (!produto) throw new Error("Produto não encontrado");

        const { categoriaId, ...produtoData } = data;
        if (categoriaId) {
            const categoria = await this.categoriaRepository.findOneBy({ id: categoriaId });
            if (!categoria) throw new Error("Categoria não encontrada");
            produto.categoria = categoria;
        }

        Object.assign(produto, produtoData);
        return await this.repository.save(produto);
    }

    async delete(id: string): Promise<void> {
        const result = await this.repository.delete(id);
        if (result.affected === 0) throw new Error("Produto não encontrado");
    }
}
