enum TipoTrabalho {
    Atriz,
    Padeiro,
}

interface Gente {
    nome: string,
    idade: number,
    profissao: TipoTrabalho,
}

let pessoa1 = {} as Gente;
pessoa1.nome = 'Maria',
pessoa1.idade = 29,
pessoa1.profissao = TipoTrabalho.Atriz;


let pessoa2 = {} as Gente;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = TipoTrabalho.Padeiro;

let pessoa3 = {} as Gente;
pessoa3.nome = "laura",
pessoa3.idade = 32,
pessoa3.profissao = TipoTrabalho.Atriz;


let pessoa4 = {} as Gente;
pessoa4.nome = "carlos",
pessoa4.idade = 19,
pessoa4.profissao = TipoTrabalho.Padeiro;
