function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Maria',
	idade: 13,
};

const pessoa2 = {
	nome: 'Matheus',
	idade: 22,
};

const pessoa3 = {
	nome: 'Julia',
	idade: 7,
};

console.log(calculaIdade.call(pessoa1, 27));
console.log(calculaIdade.apply(pessoa3, [33]));