import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>

<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;
const numeroA: number = Number(prompt("Ingrese el primer valor"));
const numeroB: number = Number(prompt("Ingrese el segundo valor"));
let suma: number = 0;

for (let i = numeroA; i <= numeroB; i++) {
  suma += i;
}
console.log(suma);
