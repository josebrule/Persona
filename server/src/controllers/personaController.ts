import {Request, Response} from 'express';
import pool from '../database';

class PersonaController{

    public async index (req:Request,res:Response): Promise<void>{
        const [personas, personasC] = await pool.query('SELECT * FROM personas;');
        console.log(personas);
        res.json(personas);
    }
    public async getOne (req: Request,res:Response): Promise<any>{
        const { id } = req.params;
        const [persona, personasC] = await pool.query('SELECT * FROM personas WHERE id = ?', [id]);
        if (persona) {
            console.log(persona)
            return res.json(persona);
        }
        res.status(404).json({ text: "The person doesn't exits" });
    }
    public async create (req: Request,res:Response): Promise<void>{
        await pool.query('INSERT INTO personas set ?', [req.body]);
        res.json({text: 'creandopersona'});
    }
    public async delete (req: Request,res:Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM personas WHERE id = ?', [id]);
        res.json({ message: "The person was deleted" });
    }
    public async update (req: Request,res:Response): Promise<void>{
        const { id } = req.params;
        const oldPerson = req.body;
        await pool.query('UPDATE personas set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The person was Updated" });
    }

}
const personaController =new PersonaController();
export default personaController;