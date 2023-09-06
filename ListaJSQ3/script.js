var r = prompt("Insira um número");

if (!isNaN(r)){
  for (var i = 1; i <= 10; i++) {
    var resultado = r * i;
    document.write(r + " x " + i + " = " + resultado + "<br>");
  }
} else{
  document.write("Nenhum número inserido")
}
