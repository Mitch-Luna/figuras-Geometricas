const miModulo = (() => {
    let e = document.getElementById("btnPerimetroId"),
      t = document.getElementById("btnAreaId"),
      d = document.getElementById("resultadoId"),
      l = (e) => 4 * e,
      n = (e) => e * e;
    e.addEventListener("click", () => {
      let e = Number(document.getElementById("ladoCuadradoId").value),
        t = `el perimetro es: ${l(e)} cm.`;
      d.innerText = t;
    }),
      t.addEventListener("click", () => {
        let e = Number(document.getElementById("ladoCuadradoId").value),
          t = `El area es: ${n(e)} m\xb2`;
        d.innerText = t;
      });
  })();
  