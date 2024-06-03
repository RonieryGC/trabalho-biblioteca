import conexao from '../config/conexao.js'

const Livro = conexao.Schema({
    titulo: 'String',
    autor: 'String',
    genero: 'String',
    isbn:{
        type:'String',
        required: true
    },
    disponibilidade:{
        type:'String',
        required: true
    },
    foto: 'String',
    ano_de_publicacao: {
        type: 'Date',
    }
})

export default conexao.model('Livro',Livro)