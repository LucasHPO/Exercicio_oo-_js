class Titulo {
    constructor (nome, genero, classificacao, anoDeLancamento) {
    this.nome = nome;
    this.genero = genero;
    this.classificacao = classificacao;
    this.anoDeLancamento = anoDeLancamento;
    }
}

class Filme extends Titulo{
    constructor (nome, genero, classificacao, anoDeLancamento, duracao, diretor) {
        super(nome, genero, classificacao, anoDeLancamento);
        this.duracao = duracao;
        this.diretor = diretor;
    }
}

class Serie extends Titulo{
    constructor (nome, genero, classificacao, anoDeLancamento, temporadas, numeroDeEpisodios){
        super(nome, genero, classificacao, anoDeLancamento)
        this.temporadas = temporadas;
        this.numeroDeEpisodios = numeroDeEpisodios;
    }
}

const detonaRalph = new Filme ("Detona Ralph", "Animação", "Livre", 2012,101, "Rich Moore");
const fordVSFerrari = new Filme ("Ford VS Ferrari", "Drama/Esporte", "+12", 2019,152, "Rich Moore");
const driveToSurvive = new Serie ("Drive To Survive", "Documentários", "+12",2019 , 5, 50);

console.log(detonaRalph);
console.log(fordVSFerrari);
console.log(driveToSurvive);