import { appDataSource } from "../database/appDataSource.js";
import { Categoria } from "../entities/Categoria.js";

export class CategoriaService {
    private repository = appDataSource.getRepository(Categoria);

    async getAll(): Promise<Categoria[]> {
        return await this.repository.find();
    }

    async getById(id: string): Promise<Categoria | null> {
        return await this.repository.findOneBy({ id });
    }

    async create(data: Partial<Categoria>): Promise<Categoria> {
        const categoria = this.repository.create(data);
        return await this.repository.save(categoria);
    }

    async update(id: string, data: Partial<Categoria>): Promise<Categoria> {
        const categoria = await this.getById(id);
        if (!categoria) throw new Error("Categoria não encontrada");

        Object.assign(categoria, data);
        return await this.repository.save(categoria);
    }

    async delete(id: string): Promise<void> {
        const result = await this.repository.delete(id);
        if (result.affected === 0) throw new Error("Categoria não encontrada");
    }
}
