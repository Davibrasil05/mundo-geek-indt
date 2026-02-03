import type { Request, Response } from "express";
import { ProdutoService } from "../services/produto.service.js";
import { createProdutoSchema, updateProdutoSchema } from "../schemas/produto.schema.js";

const service = new ProdutoService();

export class ProdutoController {
  async getAll(req: Request, res: Response) {
    try {
      const result = await service.getAll();
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const result = await service.getById(req.params.id);
      if (!result) return res.status(404).json({ message: "Produto não encontrado" });
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const validatedData = createProdutoSchema.parse(req.body);
      const result = await service.create(validatedData);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message || error.errors });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const validatedData = updateProdutoSchema.parse(req.body);
      const result = await service.update(req.params.id, validatedData);
      res.json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message || error.errors });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await service.delete(req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export const produtoController = new ProdutoController();