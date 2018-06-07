/*objeto calculadora*/
var calculadora = {
	/*metodos*/

	presionarteclaon: function () {
		document.getElementById('on').style = "width:21% ;height: 58.91px"
	},
	retornarteclaon: function () {
		document.getElementById('on').style = "width:22% ;height: 62.91px"
	},
	presionarteclasign: function () {
		document.getElementById('sign').style = "width:21% ;height: 58.91px"
	},
	retornarteclasing: function () {
		document.getElementById('sign').style = "width:22% ;height: 62.91px"
	},
	presionarteclaraiz: function () {
		document.getElementById('raiz').style = "width:21% ;height: 58.91px"
	},
	retornarteclaraiz: function () {
		document.getElementById('raiz').style = "width:22% ;height: 62.91px"
	},
	presionartecladivido: function () {

		document.getElementById('dividido').style = "width:21% ;height: 58.91px"
	},
	retornartecladividido: function () {

		document.getElementById('dividido').style = "width:22% ;height: 62.91px"
	},
	presionartecla7: function () {
		document.getElementById('7').style = "width:21% ;height: 58.91px"
	},
	retornartecla7: function () {
		document.getElementById('7').style = "width:22% ;height: 62.91px"
	},
	presionartecla8: function () {
		document.getElementById('8').style = "width:21% ;height: 58.91px"
	},
	retornartecla8: function () {
		document.getElementById('8').style = "width:22% ;height: 62.91px"
	},
	presionartecla9: function () {

		document.getElementById('9').style = "width:21% ;height: 58.91px"
	},
	retornartecla9: function () {

		document.getElementById('9').style = "width:22% ;height: 62.91px"
	},

	presionarteclaX: function () {

		document.getElementById('por').style = "width:21% ;height: 58.91px"
	},
	retornarteclaX: function () {

		document.getElementById('por').style = "width:22% ;height: 62.91px"
	},
	presionartecla4: function () {

		document.getElementById('4').style = "width:21% ;height: 58.91px"
	},
	retornartecla4: function () {

		document.getElementById('4').style = "width:22% ;height: 62.91px"
	},
	presionartecla5: function () {

		document.getElementById('5').style = "width:21% ;height: 58.91px"
	},
	retornartecla5: function () {

		document.getElementById('5').style = "width:22% ;height: 62.91px"
	},
	presionartecla6: function () {

		document.getElementById('6').style = "width:21% ;height: 58.91px"
	},
	retornartecla6: function () {

		document.getElementById('6').style = "width:22% ;height: 62.91px"
	},
	presionarteclamenos: function () {

		document.getElementById('menos').style = "width:21% ;height: 58.91px"
	},
	retornarteclamenos: function () {

		document.getElementById('menos').style = "width:22% ;height: 62.91px"
	},

	presionartecla1: function () {

		document.getElementById('1').style = "width:26% ;height: 58.91px"
	},
	retornartecla1: function () {

		document.getElementById('1').style = "width:28% ;height: 62.91px"
	},
	presionarteclamas: function () {

		document.getElementById('mas').style = "  width: 88%; height: 98%; margin-left: 8px"
	},
	retornarteclamas: function () {

		document.getElementById('mas').style = "  width: 90%; height: 100%; margin-left: 10px"
	},
	presionartecla0: function () {

		document.getElementById('0').style = "width:26% ;height: 58.91px"
	},
	retornartecla0: function () {

		document.getElementById('0').style = "width:28% ;height: 62.91px"
	},
	presionartecla2: function () {

		document.getElementById('2').style = "width:26% ;height: 58.91px"
	},
	retornartecla2: function () {

		document.getElementById('2').style = "width:28% ;height: 62.91px"
	},

	presionartecla3: function () {

		document.getElementById('3').style = "width:26% ;height: 58.91px"
	},
	retornartecla3: function () {

		document.getElementById('3').style = "width:29% ;height: 62.91px"
	},
	presionarteclapunto: function () {

		document.getElementById('punto').style = "width:26% ;height: 58.91px"
	},
	retornarteclapunto: function () {

		document.getElementById('punto').style = "width:28% ;height: 62.91px"
	},

	presionarteclaigual: function () {

		document.getElementById('igual').style = "width:26% ;height: 58.91px"
	},
	retornarteclaigual: function () {

		document.getElementById('igual').style = "width:28% ;height: 62.91px"
	},

	inicializacion: function () {

		document.getElementById('on').onmousedown = calculadora.presionarteclaon;
		document.getElementById('on').onclick = calculadora.retornarteclaon;
		document.getElementById('sign').onmousedown = calculadora.presionarteclasign;
		document.getElementById('sign').onclick = calculadora.retornarteclasing;
		document.getElementById('raiz').onmousedown = calculadora.presionarteclaraiz;
		document.getElementById('raiz').onclick = calculadora.retornarteclaraiz;
		document.getElementById('dividido').onmousedown = calculadora.presionartecladivido;
		document.getElementById('dividido').onclick = calculadora.retornartecladividido;
		document.getElementById('7').onmousedown = calculadora.presionartecla7;
		document.getElementById('7').onclick = calculadora.retornartecla7;
		document.getElementById('8').onmousedown = calculadora.presionartecla8;
		document.getElementById('8').onclick = calculadora.retornartecla8;
		document.getElementById('9').onmousedown = calculadora.presionartecla9;
		document.getElementById('9').onclick = calculadora.retornartecla9;
		document.getElementById('por').onmousedown = calculadora.presionarteclaX;
		document.getElementById('por').onclick = calculadora.retornarteclaX;
		document.getElementById('4').onmousedown = calculadora.presionartecla4;
		document.getElementById('4').onclick = calculadora.retornartecla4;
		document.getElementById('5').onmousedown = calculadora.presionartecla5;
		document.getElementById('5').onclick = calculadora.retornartecla5;
		document.getElementById('6').onmousedown = calculadora.presionartecla6;
		document.getElementById('6').onclick = calculadora.retornartecla6;
		document.getElementById('menos').onmousedown = calculadora.presionarteclamenos;
		document.getElementById('menos').onclick = calculadora.retornarteclamenos;
		document.getElementById('mas').onmousedown = calculadora.presionarteclamas;
		document.getElementById('mas').onclick = calculadora.retornarteclamas;
		document.getElementById('0').onmousedown = calculadora.presionartecla0;
		document.getElementById('0').onclick = calculadora.retornartecla0;
		document.getElementById('1').onmousedown = calculadora.presionartecla1;
		document.getElementById('1').onclick = calculadora.retornartecla1;
		document.getElementById('2').onmousedown = calculadora.presionartecla2;
		document.getElementById('2').onclick = calculadora.retornartecla2;
		document.getElementById('3').onmousedown = calculadora.presionartecla3;
		document.getElementById('3').onclick = calculadora.retornartecla3;
		document.getElementById('punto').onmousedown = calculadora.presionarteclapunto;
		document.getElementById('punto').onclick = calculadora.retornarteclapunto;
		document.getElementById('igual').onmousedown = calculadora.presionarteclaigual;
		document.getElementById('igual').onclick = calculadora.retornarteclaigual;

	}

}


calculadora.inicializacion();
