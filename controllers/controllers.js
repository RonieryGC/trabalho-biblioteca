import Usuario from '../models/usuario.js'
import Post from '../models/post.js'
import livro from '../models/livro.js'

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

    await livro.save()
    res.render('livro')

}

export async function livro(req, res) {
    let livros = await livro.find({})
    res.render('livro',{Livros:livros})
}