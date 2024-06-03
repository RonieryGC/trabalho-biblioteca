import Usuario from '../models/usuario.js'
import Post from '../models/post.js'

export function helloworld(req,res){
    res.render('index')
}

export async function cadastralivro(req,res){
    const livro = new livro({
        titulo: req.body.titulo,
        genero: req.body.genero,
        isbn: req.body.isbn,
        foto: req.file.filename,
        data_de_publicacao: req.body.data_de_publicacao,
        disponibilidade: req.body.disponibilidade
    })

    console.log(livro)

    await liro.save()
    res.render('livro')

}