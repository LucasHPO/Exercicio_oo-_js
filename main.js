class Titulo {
    constructor (nome, genero, classificacao, anoDeLancamento) {
    this.nome = nome;
    this.genero = genero;
    this.classificacao = classificacao;
    this.anoDeLancamento = anoDeLancamento;
    }
}

class Filme extends Titulo{
    constructor (nome, genero,classificacao, duracao, diretor) {
        super(nome, genero,classificacao);
        this.duracao = duracao;
        this.diretor = diretor;
    }
}

class Serie extends Titulo{
    constructor (nome, genero,classificacao, temporadas, numeroDeEpisodios){
        super(nome, genero,classificacao)
        this.temporadas = temporadas;
        this.numeroDeEpisodios = numeroDeEpisodios;
    }
}

const detonaRalph = new Filme ("Detona Ralph", "Animação", 2012, "Livre",101, "Rich Moore");
const fordVSFerrari = new Filme ("Ford VS Ferrari", "Drama/Esporte", 2019, "+12",152, "Rich Moore");
const driveToSurvive = new Serie ("Drive To Survive", "Documentários",2019 , "+12", 5, 50);

console.log(detonaRalph);
console.log(fordVSFerrari);
console.log(driveToSurvive);