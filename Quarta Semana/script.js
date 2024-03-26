document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('camposAluno').style.display = 'block';
    document.getElementById('campoMatricula').style.display = 'block';
});

class Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, curso, matricula) {
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        this.curso = curso;
        this.matricula = matricula;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, area, matricula, lattes) {
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        this.area = area;
        this.matricula = matricula;
        this.lattes = lattes;
    }
}

function limparCampos() {
    document.getElementById('cadastroForm').reset();
}

function mostrarCampo(idRadio) {
    console.log("ID do radio clicado:", idRadio);
    let tipo = idRadio;
    let camposAluno = document.getElementById('camposAluno');
    let camposProfessorArea = document.getElementById('camposProfessorArea');
    let campoMatricula = document.getElementById('campoMatricula');
    let camposProfessorLattes = document.getElementById('camposProfessorLattes');

    if (tipo === 'aluno') {
        console.log("Mostrando campos de aluno");
        camposAluno.style.display = 'block';
        camposProfessorArea.style.display = 'none';
        campoMatricula.style.display = 'block';
        camposProfessorLattes.style.display = 'none';
    } else if (tipo === 'professor') {
        console.log("Mostrando campos de professor");
        camposAluno.style.display = 'none';
        camposProfessorArea.style.display = 'block';
        campoMatricula.style.display = 'block';
        camposProfessorLattes.style.display = 'block';
    }
}

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let telefoneFixo = document.getElementById('telefoneFixo').value;
    let telefoneCelular = document.getElementById('telefoneCelular').value;

    let objeto;

    if (document.getElementById('aluno').checked) {
        let curso = document.getElementById('curso').value;
        let matricula = document.getElementById('matricula').value;
        objeto = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, curso, matricula);
        objeto.nomeObjeto = 'Aluno';
        document.getElementById('cadastroForm').reset();
    } else {
        let area = document.getElementById('area').value;
        let matricula = document.getElementById('matricula').value;
        let lattes = document.getElementById('lattes').value;
        objeto = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, area, matricula, lattes);
        objeto.nomeObjeto = 'Professor';
        document.getElementById('cadastroForm').reset();
    }

    alert("Informações do objeto criado:\n\n" +
        "Tipo de cadastro: " + objeto.nomeObjeto + "\n" +
        "Nome: " + objeto.nome + "\n" +
        "Email: " + objeto.email + "\n" +
        "Data de Nascimento: " + objeto.dataNascimento + "\n" +
        "Telefone Fixo: " + objeto.telefoneFixo + "\n" +
        "Telefone Celular: " + objeto.telefoneCelular + "\n" +
        ((objeto instanceof Aluno) ? "Curso: " + objeto.curso + "\n" + "Matrícula: " + objeto.matricula : "") +
        ((objeto instanceof Professor) ? "Área: " + objeto.area + "\n" +
            "Matrícula: " + objeto.matricula + "\n" +
            "Lattes: " + objeto.lattes + "\n" : "")
    );
});