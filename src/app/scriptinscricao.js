function fnBuscaCep(cep) {
    //console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => resp.json())
      .catch(() => console.log(Error))
      .then((dados) => {
        console.log(dados);
        alimentaForm(dados);
      });
  }
  
  function alimentaForm(dados) {
    document.querySelector("#endereço").value = dados.logradouro;
    document.querySelector("#bairro").value = dados.bairro;
    document.querySelector("#cidade").value = dados.localidade;
    document.querySelector("#estado").value = dados.uf;
    document.querySelector("#numero").focus();
  }

  function cadastrar() {
    var incluir="Cadastro efetuado com sucesso";
    alert(incluir);
}
console.log

function buscar() {
    var pesquisar="busca não encontrada";
    alert(pesquisar);
}
console.log
