export default class CepAPI {
  constructor(cep, rua, numero, bairro, cidade, uf) {
    this.cep = document.getElementById(cep);
    this.logradouro = document.getElementById(rua);
    this.numero = document.getElementById(numero);
    this.bairro = document.getElementById(bairro);
    this.cidade = document.getElementById(cidade);
    this.uf = document.getElementById(uf);

    this.pesquisarCep = this.pesquisarCep.bind(this);
  }
  preencherFormulario(dadosJson) {
    this.logradouro.value = dadosJson.logradouro;
    this.bairro.value = dadosJson.bairro;
    this.cidade.value = dadosJson.localidade;
    this.uf.value = dadosJson.uf;
  }

  limparFormulario() {
    this.logradouro.value = '';
    this.numero.value = '';
    this.bairro.value = '';
    this.cidade.value = '';
    this.uf.value = '';
  }

  async pesquisarCep() {
    this.limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    const eNumero = (numero) => /^[0-9]+$/g.test(numero);
    const cepValido = (cep) => cep.length == 8 && eNumero(cep);
    if (cepValido(cep.value)) {
      const dados = await fetch(url);
      const dadosJson = await dados.json();
      if (dadosJson.hasOwnProperty('erro')) {
        console.log(dadosJson);
        window.alert('preee');
        // limparFormulario();
      } else {
        this.preencherFormulario(dadosJson);
      }
    } else {
      window.alert('preencha um cep válido');
    }
  }

  addInputEvent() {
    this.cep.addEventListener('focusout', this.pesquisarCep);
  }

  init() {
    this.addInputEvent();
    return this;
  }
}
