import { Router } from 'express';
import personaController from '../controllers/personaController';

class PersonRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',personaController.index);
        this.router.get('/:id',personaController.getOne);
        this.router.post('/',personaController.create);
        this.router.delete('/:id',personaController.delete);
        this.router.put('/:id',personaController.update);
    }

}
const personRoutes = new PersonRoutes();
export default personRoutes.router;