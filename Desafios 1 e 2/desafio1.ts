// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface Colaborador {
    codigo: number,
    nome: string,
}

let colaborador = {} as Colaborador;
colaborador.codigo= 10;
colaborador.nome = "John";