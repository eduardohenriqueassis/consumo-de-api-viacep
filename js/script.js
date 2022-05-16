import CepAPI from './apiCep.js';

const cepAPI = new CepAPI('cep', 'rua', 'numero', 'bairro', 'cidade', 'uf');

cepAPI.init();
