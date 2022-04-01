import {Request, Response} from 'express';
import pool from '../database';
import db from '../database';

class PersonaController{

    public async index (req:Request,res:Response): Promise<void>{
        const personas = await pool.query('SELECT * FROM personas');
        res.json(personas);
    }
    public async getOne (req: Request,res:Response): Promise<any>{
        const { id } = req.params;
        const personas = await pool.query('SELECT * FROM personas WHERE id = ?', [id]);
        console.log(personas.RowDataPacket.length);
        if (personas.RowDataPacket.length > 0) {
            return res.json(personas.RowDataPacket);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }
    public async create (req: Request,res:Response): Promise<void>{
        await pool.query('INSERT INTO personas set ?', [req.body]);
        res.json({text: 'creandopersona'});
    }
    public async delete (req: Request,res:Response): Promise<void>{

        res.json({text: 'elimianndopersona'});
    }
    public async update (req: Request,res:Response): Promise<void>{

        res.json({text: 'adopersona'})
    }

}
const personaController =new PersonaController();
export default personaController;