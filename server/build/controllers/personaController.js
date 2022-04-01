"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PersonaController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personas = yield database_1.default.query('SELECT * FROM personas');
            res.json(personas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personas = yield database_1.default.query('SELECT * FROM personas WHERE id = ?', [id]);
            console.log(personas.RowDataPacket.length);
            if (personas.RowDataPacket.length > 0) {
                return res.json(personas.RowDataPacket);
            }
            res.status(404).json({ text: "The game doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO personas set ?', [req.body]);
            res.json({ text: 'creandopersona' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ text: 'elimianndopersona' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ text: 'adopersona' });
        });
    }
}
const personaController = new PersonaController();
exports.default = personaController;
