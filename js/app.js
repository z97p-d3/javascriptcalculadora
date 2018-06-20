/*objeto calculadora*/
var calculadora = {
		//variables
		display: document.getElementById("display"),
		uno: document.getElementById('1'),
		dos: document.getElementById('2'),
		tres: document.getElementById('3'),
		cuatro: document.getElementById('4'),
		cinco: document.getElementById('5'),
		seis: document.getElementById('6'),
		siete: document.getElementById('7'),
		ocho: document.getElementById('8'),
		nueve: document.getElementById('9'),
		cero: document.getElementById('0'),
		mas: document.getElementById('mas'),
		menos: document.getElementById('menos'),
		por: document.getElementById('por'),
		dividido: document.getElementById('dividido'),
		raiz: document.getElementById('raiz'),
		sign: document.getElementById('sign'),
		on: document.getElementById('on'),
		igual: document.getElementById("igual"),
		signopunto: document.getElementById("punto"),
		operandoa: 0,
		operandob: 0,
		operacion: 0,


		//metodo para mostrar numeros en pantalla

		numero1: function () {
			if (calculadora.display.textContent.length <= 7) {

				var num1 = calculadora.display.innerHTML == "0"
				if (num1) {
					calculadora.display.textContent = "1"
				} else {
					calculadora.display.textContent += "1"

				}
			}
		},
		numero2: function () {
			if (calculadora.display.textContent.length <= 7) {
				var num2 = calculadora.display.innerHTML == "0"
				if (num2) {
					calculadora.display.textContent = "2"
				} else {

					calculadora.display.textContent += "2"
				}
			}
		},
		numero3: function () {
			if (calculadora.display.textContent.length <= 7) {
				var num3 = calculadora.display.innerHTML == "0"
				if (num3) {
					calculadora.display.textContent = "3"
				} else {

					calculadora.display.textContent += "3"
				}
			}
		},
		numero4: function () {
			if (calculadora.display.textContent.length <= 7) {
				var num4 = calculadora.display.innerHTML == "0"
				if (num4) {
					calculadora.display.textContent = "4"
				} else {

					calculadora.display.textContent += "4"
				}
			}
		},
		numero5: function () {
			if (calculadora.display.textContent.length <= 7) {
				var num5 = calculadora.display.innerHTML == "0"
				if (num5) {
					calculadora.display.textContent = "5"
				} else {

					calculadora.display.textContent += "5"
				}
			}
		},
		numero6: function () {
			if (calculadora.display.textContent.length <= 7) {
				var num6 = calculadora.display.innerHTML == "0"
				if (num6) {
					calculadora.display.textContent = "6"
				} else {

					calculadora.display.textContent += "6"
				}
			}
		},
		numero7: function () {
			if (calculadora.display.textContent.length <= 7) {
				var num7 = calculadora.display.innerHTML == "0"
				if (num7) {
					calculadora.display.textContent = "7"
				} else {

					calculadora.display.textContent += "7"
				}
			}
		},
		numero8: function () {
			if (calculadora.display.textContent.length <= 7) {
				var num8 = calculadora.display.innerHTML == "0"
				if (num8) {
					calculadora.display.textContent = "8"
				} else {

					calculadora.display.textContent += "8"
				}
			}
		},

		numero9: function () {
			if (calculadora.display.textContent.length <= 7) {
				var num9 = calculadora.display.innerHTML == "0"
				if (num9) {
					calculadora.display.textContent = "9"
				} else {

					calculadora.display.textContent += "9"
				}
			}
		},

		numero0: function () {
			if (calculadora.display.textContent.length <= 7) {
				var num0 = calculadora.display.innerHTML == "0"
				if (num0) {
					calculadora.display.textContent = "0"
				} else {

					calculadora.display.textContent += "0"
				}
			}
		},


		//metodos pra presionar las teclas

		presionarteclaon: function () {
			calculadora.on.style = "width:21% ;height: 58.91px"
			calculadora.limpiar();
		},
		retornarteclaon: function () {
			calculadora.on.style = "width:22% ;height: 62.91px"
		},
		presionarteclasign: function () {
			calculadora.sign.style = "width:21% ;height: 58.91px"
			calculadora.sigononegativo();
		},
		retornarteclasing: function () {
			calculadora.sign.style = "width:22% ;height: 62.91px"
		},
		presionarteclaraiz: function () {
			document.getElementById('raiz').style = "width:21% ;height: 58.91px"
		},
		retornarteclaraiz: function () {
			document.getElementById('raiz').style = "width:22% ;height: 62.91px"
		},
		presionartecladivido: function () {
			document.getElementById('dividido').style = "width:21% ;height: 58.91px"
			calculadora.dividir();
		},
		retornartecladividido: function () {
			document.getElementById('dividido').style = "width:22% ;height: 62.91px"
		},
		presionartecla7: function () {
			document.getElementById('7').style = "width:21% ;height: 58.91px";
			calculadora.numero7();
		},
		retornartecla7: function () {
			document.getElementById('7').style = "width:22% ;height: 62.91px"

		},
		presionartecla8: function () {
			document.getElementById('8').style = "width:21% ;height: 58.91px"
			calculadora.numero8();
		},
		retornartecla8: function () {
			document.getElementById('8').style = "width:22% ;height: 62.91px"
		},
		presionartecla9: function () {
			document.getElementById('9').style = "width:21% ;height: 58.91px"
			calculadora.numero9();
		},
		retornartecla9: function () {
			document.getElementById('9').style = "width:22% ;height: 62.91px"
		},

		presionarteclaX: function () {
			document.getElementById('por').style = "width:21% ;height: 58.91px"
			calculadora.multiplicar();
		},
		retornarteclaX: function () {
			document.getElementById('por').style = "width:22% ;height: 62.91px"
		},
		presionartecla4: function () {
			document.getElementById('4').style = "width:21% ;height: 58.91px"

			calculadora.numero4();
		},
		retornartecla4: function () {
			document.getElementById('4').style = "width:22% ;height: 62.91px"
		},
		presionartecla5: function () {
			document.getElementById('5').style = "width:21% ;height: 58.91px"
			calculadora.numero5();
		},
		retornartecla5: function () {
			document.getElementById('5').style = "width:22% ;height: 62.91px"
		},
		presionartecla6: function () {
			document.getElementById('6').style = "width:21% ;height: 58.91px"
			calculadora.numero6();
		},
		retornartecla6: function () {
			document.getElementById('6').style = "width:22% ;height: 62.91px"
		},
		presionarteclamenos: function () {
			document.getElementById('menos').style = "width:21% ;height: 58.91px"
			calculadora.restar();
		},
		retornarteclamenos: function () {
			document.getElementById('menos').style = "width:22% ;height: 62.91px"
		},
		presionartecla1: function () {
			calculadora.uno.style = "width:26% ;height: 58.91px"
			calculadora.numero1()
		},
		retornartecla1: function () {
			calculadora.uno.style = "width:28% ;height: 62.91px"
		},
		presionarteclamas: function () {
			document.getElementById('mas').style = "  width: 88%; height: 98%; margin-left: 8px"
			calculadora.sumar();
		},
		retornarteclamas: function () {
			document.getElementById('mas').style = "  width: 90%; height: 100%; margin-left: 10px"
		},
		presionartecla0: function () {
			document.getElementById('0').style = "width:26% ;height: 58.91px"
			calculadora.numero0();
		},
		retornartecla0: function () {
			document.getElementById('0').style = "width:28% ;height: 62.91px"
		},
		presionartecla2: function () {
			calculadora.dos.style = "width:26% ;height: 58.91px"

			calculadora.numero2();
		},
		retornartecla2: function () {
			calculadora.dos.style = "width:28% ;height: 62.91px"
		},
		presionartecla3: function () {
			document.getElementById('3').style = "width:26% ;height: 58.91px"
			calculadora.numero3();
		},
		retornartecla3: function () {
			document.getElementById('3').style = "width:29% ;height: 62.91px"
		},
		presionarteclapunto: function () {
			document.getElementById('punto').style = "width:26% ;height: 58.91px"
			calculadora.agregarPunto();
		},
		retornarteclapunto: function () {
			document.getElementById('punto').style = "width:28% ;height: 62.91px"
		},
		presionarteclaigual: function () {
			document.getElementById('igual').style = "width:26% ;height: 58.91px"
			calculadora.resultado();
		},
		retornarteclaigual: function () {
			document.getElementById('igual').style = "width:29% ;height: 62.91px"
		},

		//calculos 


		agregarPunto: function () {
			var elemento = calculadora.display
			if (elemento.textContent.indexOf('.') < 0) {
				var displayNew = elemento.textContent + '.';
				elemento.textContent = displayNew;
			}
		},

		sigononegativo: function () {

			var elemento1 = calculadora.display
			if (elemento1.textContent.indexOf('-') < 0) {
				var elemento3 = "-" + elemento1.textContent
				elemento1.textContent = elemento3
				calculadora.cerosigno()


			} else {
				var elemento7 = -1 * calculadora.display.textContent
				calculadora.display.textContent = elemento7
			}

		},

		cerosigno: function () {
			var elemento2 = calculadora.display
			if (elemento2.textContent.indexOf('0') > 0) {
				var elemento4 = "0"
				elemento2.textContent = elemento4
			}

		},

		sumar: function () {
			calculadora.operandoa = calculadora.display.textContent;
			calculadora.operacion = "+";
			calculadora.limpiar();

		},
		restar: function () {
			calculadora.operandoa = calculadora.display.textContent;
			calculadora.operacion = "-";
			calculadora.limpiar();

		},
		multiplicar: function () {
			calculadora.operandoa = calculadora.display.textContent;
			calculadora.operacion = "*";
			calculadora.limpiar();

		},
		dividir: function () {
			calculadora.operandoa = calculadora.display.textContent;
			calculadora.operacion = "/";
			calculadora.limpiar();

		},

		//limpiar  pantalla

		limpiar: function () {

			calculadora.display.textContent = "0";
		},

		resultado: function () {


			calculadora.operandob += calculadora.display.textContent

			calculadora.resolver()

		},

		resetear: function () {

			calculadora.display.textContent = "0";
			calculadora.operandoa = "0";
			calculadora.operandob = "0";
			calculadora.operacion = "";
		},
		resolver: function () {

			var res = 0;



			switch (calculadora.operacion) {

				case "+":

					res = parseFloat(calculadora.operandoa) + parseFloat(calculadora.operandob);

					break;
				case "-":
					res = parseFloat(calculadora.operandoa) - parseFloat(calculadora.operandob);

					break;
				case "*":
					res = parseFloat(calculadora.operandoa) * parseFloat(calculadora.operandob);

					break;
				case "/":
					res = parseFloat(calculadora.operandoa) / parseFloat(calculadora.operandob);


			}

			calculadora.resetear()
			if(calculadora.display.textContent.length<=7){
				

			calculadora.display.textContent =res
			}
			


		},


		//carga de metodos
		inicializacion: function () {
			calculadora.on.onmousedown = calculadora.presionarteclaon;
			calculadora.on.onclick = calculadora.retornarteclaon;
			calculadora.sign.onmousedown = calculadora.presionarteclasign;
			calculadora.sign.onclick = calculadora.retornarteclasing;
			calculadora.raiz.onmousedown = calculadora.presionarteclaraiz;
			calculadora.raiz.onclick = calculadora.retornarteclaraiz;
			calculadora.dividido.onmousedown = calculadora.presionartecladivido;
			calculadora.dividido.onclick = calculadora.retornartecladividido;
			calculadora.siete.onmousedown = calculadora.presionartecla7
			calculadora.siete.onclick = calculadora.retornartecla7
			calculadora.ocho.onmousedown = calculadora.presionartecla8;
			calculadora.ocho.onclick = calculadora.retornartecla8;
			calculadora.nueve.onmousedown = calculadora.presionartecla9;
			calculadora.nueve.onclick = calculadora.retornartecla9;
			calculadora.por.onmousedown = calculadora.presionarteclaX;
			calculadora.por.onclick = calculadora.retornarteclaX;
			calculadora.cuatro.onmousedown = calculadora.presionartecla4;
			calculadora.cuatro.onclick = calculadora.retornartecla4
			calculadora.cinco.onmousedown = calculadora.presionartecla5;
			calculadora.cinco.onclick = calculadora.retornartecla5;
			calculadora.seis.onmousedown = calculadora.presionartecla6;
			calculadora.seis.onclick = calculadora.retornartecla6;
			calculadora.menos.onmousedown = calculadora.presionarteclamenos;
			calculadora.menos.onclick = calculadora.retornarteclamenos;
			calculadora.mas.onmousedown = calculadora.presionarteclamas;
			calculadora.mas.onclick = calculadora.retornarteclamas;
			calculadora.cero.onmousedown = calculadora.presionartecla0;
			calculadora.cero.onclick = calculadora.retornartecla0;
			calculadora.uno.onmousedown = calculadora.presionartecla1;
			calculadora.uno.onclick = calculadora.retornartecla1;
			calculadora.dos.onmousedown = calculadora.presionartecla2;
			calculadora.dos.onclick = calculadora.retornartecla2;
			calculadora.tres.onmousedown = calculadora.presionartecla3;
			calculadora.tres.onclick = calculadora.retornartecla3;
			calculadora.signopunto.onmousedown = calculadora.presionarteclapunto;
			calculadora.signopunto.onclick = calculadora.retornarteclapunto;
			calculadora.igual.onmousedown = calculadora.presionarteclaigual;
			calculadora.igual.onclick = calculadora.retornarteclaigual;

		},
	}
	//llamada de objeto calculadora
calculadora.inicializacion();
