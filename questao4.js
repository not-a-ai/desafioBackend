let faturamentoPorEstado = [
  { "estado": "SP", "faturamento": 67836.43 },
  { "estado": "RJ", "faturamento": 36678.66 },
  { "estado": "MG", "faturamento": 29229.88 },
  { "estado": "ES", "faturamento": 27165.48 },
  { "estado": "Outros", "faturamento": 19849.53 }
]

let faturamentoTotal = 0;
for (let faturamento of faturamentoPorEstado) {
  faturamentoTotal += faturamento.faturamento;
}
faturamentoPorEstado.forEach((faturamento) => {
  let estado = faturamento.estado
  let percentual = (faturamento.faturamento / faturamentoTotal) * 100
  console.log(`${estado}: ${percentual.toFixed(2)}%`)
}
)