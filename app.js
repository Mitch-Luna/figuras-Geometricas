const myModule = (() => {
    const btnPerimetro = document.getElementById("btnPerimetroId");
    const btnArea = document.getElementById("btnAreaId");
    const btnPerimetroTrinagulo = document.getElementById("btnPerimetroTId");
    const btnAreaTriangulo = document.getElementById("btnAreaTId")
    const btnDiametroCirculo = document.getElementById("btnDiametroId")
    const btnPerimetroCirculo = document.getElementById("btnPerimetroCId")
    const btnAreaCirculo = document.getElementById("btnAreaCId")
  
    const mensaje = document.getElementById("resultadoId");
    const perimetroCuadrado = (lado) => lado * 4;
    const areaCuadrado = (lado) => lado * lado;
  
    const perimetroTriangulo = (lado1, lado2, lado3) => lado1 + lado2 + lado3;
    const areaTriangulo = (base, altura) => (base * altura) / 2;
    
    const diametroCirculo = (radio) => radio * 2;
    const perimetroCirculo = (radio) => (2 * 3.1416 * radio);
    const areaDelCirculo = (radio) => ((radio * radio) * 3.1416);

    btnPerimetro.addEventListener("click", () => {
      let inputLado = document.getElementById("ladoCuadradoId");
      let valueLado = Number(inputLado.value);
  
      const resultado = `el perimetro es: ${perimetroCuadrado(valueLado)} cm.`;
      mensaje.innerText = resultado;
    });
  
    btnArea.addEventListener("click", () => {
      let inputLado = document.getElementById("ladoCuadradoId");
      let valueLado = Number(inputLado.value);
  
      const resultado = `El area es: ${areaCuadrado(valueLado)} m²`;
      mensaje.innerText = resultado;
    });
  
  
    btnPerimetroTrinagulo.addEventListener("click", () => {
      let valueLadoUno = Number(document.getElementById("ladoTriangulo1Id").value);
      let valueLadoDos = Number(document.getElementById("ladoTriangulo2Id").value);
      let valueLadoTres = Number(document.getElementById("ladoTriangulo3Id").value);

    if(valueLadoUno === valueLadoDos && valueLadoUno===valueLadoTres){
      const resultado = `El perimetro del triangulo es: ${perimetroTriangulo(valueLadoUno, valueLadoDos, valueLadoTres)} cm, Es un triangulo equilatero`;
      mensaje.innerText = resultado;
      
    }else if(valueLadoUno === valueLadoDos || valueLadoUno === valueLadoTres || valueLadoDos === valueLadoTres){
      const resultado = `El perimetro del triangulo es: ${perimetroTriangulo(valueLadoUno, valueLadoDos, valueLadoTres)} cm, Es un triangulo isosceles`;
      mensaje.innerText = resultado;

    }else{
      const resultado = `El perimetro del triangulo es: ${perimetroTriangulo(valueLadoUno, valueLadoDos, valueLadoTres)} cm, Es un triangulo escaleno`;
      mensaje.innerText = resultado;
    }
    });
  
    btnAreaTriangulo.addEventListener("click", () => {
      let valueBase = Number(document.getElementById("areaTriangulo1Id").value);
      let valueAltura = Number(document.getElementById("areaTriangulo2Id").value);
  
      const resultado = `El area del triángulo es: ${areaTriangulo(valueBase, valueAltura)} cm²`;
      mensaje.innerText = resultado;
    });
  
    btnDiametroCirculo.addEventListener("click", () => {
      let valueLado = Number(document.getElementById("radioCirculoId").value);
    
      const resultado = `El diametro del círculo es: ${diametroCirculo(valueLado)} cm`;
      mensaje.innerText = resultado;
    });
  
    btnPerimetroCirculo.addEventListener("click", () => {
      let valueLado = Number(document.getElementById("radioCirculoId").value);
    
      const resultado = `El perimetro del círculo es: ${perimetroCirculo(valueLado)} cm`;
      mensaje.innerText = resultado;
    });
  
    btnAreaCirculo.addEventListener("click", () => {
      let valueLado = Number(document.getElementById("radioCirculoId").value);
    
      const resultado = `El area del círculo es: ${areaDelCirculo(valueLado)} cm`;
      mensaje.innerText = resultado;
    });
  
  })();
  