import express from 'express';
const router = express.Router();
import autenticacao from '../config/autenticacao.js';

import passport from '../config/passport.js';

import {
    abretela,
    cadastralivro,
    livro,
    cadastrausuario,
    deletarusuario,
    mostrausuarios,
    buscarusuarios,
    abretelaeditar,
    editarusuario,
    abrelogin,
} from '../controllers/controllers.js';

import multer from 'multer';

export function abretela(req,res){
    res.render('usuario')
}



export default router;