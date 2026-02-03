import { Request, Response } from "express";
import { SensorService } from "../services/SensorService.js";


const service = new SensorService();

export class SensorController {
    async create(req: Request, res: Response) {
        try {
            const result = await service.create(req.body); 
            res.status(201).json(result);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const result = await service.update(Number(req.params.id), req.body); 
            res.json(result);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}
export const sensorController = new SensorController();