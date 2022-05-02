import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Clase 11 - Actividad</h1>

<div>
Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números que están entre ellos.
</div>`;
const numeroA: number = Number(prompt("Ingrese el primer valor"));
const numeroB: number = Number(prompt("Ingrese el segundo valor"));
let suma: number = 0;

for (let i = numeroA; i <= numeroB; i++) {
  suma += i;
}
console.log(`El resulta de la suma es ${suma}`);
