export class Notas{
    constructor(matematica, historia, portugues, ingles, filosofia, sociologia){
      this.materias = {matematica, historia, portugues, ingles, filosofia, sociologia};
      this.mat = matematica;
      this.hist = historia;
      this.port = portugues;
      this.ing = ingles;
      this.filo = filosofia;
      this.soci = sociologia;
    }

    get boletin(){
        return this.materias;
    }

    adicionarNovaMateria(materia, nota){
        this.materias[materia] = nota;
    }


}