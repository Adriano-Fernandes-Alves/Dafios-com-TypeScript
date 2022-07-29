"use strict";
var TipoTrabalho;
(function (TipoTrabalho) {
    TipoTrabalho[TipoTrabalho["Atriz"] = 0] = "Atriz";
    TipoTrabalho[TipoTrabalho["Padeiro"] = 1] = "Padeiro";
})(TipoTrabalho || (TipoTrabalho = {}));
let pessoa1 = {};
pessoa1.nome = 'Maria',
    pessoa1.idade = 29,
    pessoa1.profissao = TipoTrabalho.Atriz;
let pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = TipoTrabalho.Padeiro;
let pessoa3 = {};
pessoa3.nome = "laura",
    pessoa3.idade = 32,
    pessoa3.profissao = TipoTrabalho.Atriz;
let pessoa4 = {};
pessoa4.nome = "carlos",
    pessoa4.idade = 19,
    pessoa4.profissao = TipoTrabalho.Padeiro;
