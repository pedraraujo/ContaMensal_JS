var SeuValor;
var transporte;
var lanche;

ElementCalcular = document.getElementById("calcular");
ElementCalcular.onclick = function() {
  var ElementSalario = document.getElementById("salario").value;
  var ElementTransporte = document.getElementById("transporte").value;
  var ElementAlimentacao = document.getElementById("alimentacao").value;
  var ElementMes = document.getElementById("mes").value;

  SeuValor = ElementSalario / ElementMes;

  transporte = ElementTransporte * ElementMes;

  lanche = ElementAlimentacao * ElementMes;

  ValorMensal =
    parseInt(ElementSalario) + parseInt(transporte) + parseInt(lanche);

  var resposta1 = document.getElementById("resposta1");
  var resposta2 = document.getElementById("resposta2");
  var resposta3 = document.getElementById("resposta3");
  var resposta4 = document.getElementById("resposta4");

  resposta1.textContent = `O seu ganho mensal é R$${ValorMensal.toFixed(2)}`;
  resposta2.textContent = `Sua diaria é R$${SeuValor.toFixed(2)}`;
  resposta3.textContent = `O seu transporte é R$${transporte.toFixed(2)} `;
  resposta4.textContent = `O seu lanche é R$${lanche.toFixed(2)}`;
};
