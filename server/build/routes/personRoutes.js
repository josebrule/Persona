"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personaController_1 = __importDefault(require("../controllers/personaController"));
class PersonRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', personaController_1.default.index);
        this.router.get('/', personaController_1.default.getOne);
        this.router.post('/', personaController_1.default.create);
        this.router.delete('/:id', personaController_1.default.delete);
        this.router.put('/:id', personaController_1.default.update);
    }
}
const personRoutes = new PersonRoutes();
exports.default = personRoutes.router;
