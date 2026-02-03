import { z } from "zod";

export const createCategoriaSchema = z.object({
  nome: z.preprocess(
    (val) => (val === undefined? "": val),
    z.string()
        .min(1),
    
   )
}) 