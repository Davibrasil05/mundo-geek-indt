import { z } from "zod";

export const createCategoriaSchema = z.object({
    nome: z.string().min(1, "O nome da categoria é obrigatório"),
    descricao: z.string().optional(),
});

export const updateCategoriaSchema = z.object({
    nome: z.string().min(1, "O nome da categoria é obrigatório").optional(),
    descricao: z.string().optional(),
});
