/*
let containerNav = document.getElementsByClassName("container__nav");
let containerHeader = document.getElementsByClassName("container__header");
let barsContainer = document.getElementsByClassName("container__bars")[0];
let barsChildren = barsContainer.children;
let trueFalse = true;
let submenu = document.getElementsByClassName("submenu");
let arrows = document.getElementsByClassName("fa-solid fa-chevron-up");
let titleLi = document.querySelectorAll(".title__li");
let header = document.querySelector("header");

barsContainer.addEventListener("click",() => {
	trueFalse = !trueFalse;
	if(trueFalse === false){
		containerNav[0].style.left = "0%";
		containerHeader[0].style.backgroundColor = "#fff";
		barsChildren[0].style.transform = "rotate(45deg)";
		barsChildren[0].style.borderTop = "2px solid #111";
		barsChildren[1].style.opacity = "0";
		barsChildren[2].style.transform = "rotate(-45deg)";
		barsChildren[2].style.borderTop = "2px solid #111";
		
	}else{
		containerHeader[0].style.backgroundColor = "#0f0f0f";
		containerNav[0].style.left = "-300px";
		barsChildren[0].style.transform = "rotate(0deg)";
		barsChildren[0].style.borderTop = "2px solid #fff";
		barsChildren[1].style.opacity = "1";
		barsChildren[2].style.transform = "rotate(0deg)";
		barsChildren[2].style.borderTop = "2px solid #fff";
	}
})

	if(window.innerWidth < 1024){
	let containerArrow = document.getElementsByClassName("span__i");
    for (let i = 0; i < arrows.length; i++) {
  		containerArrow[i].addEventListener("click", () => {
  	    submenu[i].classList.toggle("show");
  	    let isOpen = submenu[i].classList.contains("show");
  	   	if(isOpen === true){
  	   		arrows[i].style.transform = "rotate(-180deg)";
  	   	 	arrows[i].style.transition = "all 300ms ease";
  	   	}else{
					arrows[i].style.transform = "rotate(0deg)";  	   		
  	   	}
  		});
  	}
	}



if(window.innerWidth > 1420){


	for(let i = 0; i < titleLi.length; i++){
		titleLi[i].addEventListener("mouseover",() => {
			document.querySelectorAll(".title__li > a").forEach((title) => {title.style.color = "#111";})
			document.querySelectorAll(".submenu").forEach(sub => {sub.style.height = "0px";})
			document.querySelectorAll(".link").forEach((links) => {links.style.color = "#111";})
			document.querySelectorAll(".list__packs > li > a").forEach((a) => {a.style.color = "#111";})

			for(let j = 0; j < arrows.length; j++){
				arrows[j].style.color = "#111";
			}

			submenu[i].style.height = submenu[i].scrollHeight + "px";
	  	header.style.height = submenu[i].scrollHeight + "px";
	  	header.style.backgroundColor = "#fff";
	  	containerHeader[0].style.outline = "1px solid #fff";
	  	containerHeader[0].style.backgroundColor = "#fff";
			containerNav[0].style.backgroundColor = "#fff";
		})

		titleLi[i].addEventListener("mouseover",() => {
			arrows[i].style.transform = "rotate(-180deg)";
			arrows[i].style.color = "#111";
		submenu[i].addEventListener("mouseover",() => {
			arrows[i].style.color = "#111";
			arrows[i].style.transform ="rotate(-180deg)";
			arrows[i].style.transition = "all 300ms ease";
			})
		})
		titleLi[i].addEventListener("mouseout",() => {
			arrows[i].style.transform = "rotate(0deg)";
			arrows[i].style.transition = "all 300ms ease";
		submenu[i].addEventListener("mouseout",() => {
			arrows[i].style.transform = "rotate(0deg)";
			arrows[i].style.transition = "all 300ms ease";
			arrows[i].style.color = "#111";
			})
		})

		header.addEventListener("mouseleave",() => {
			document.querySelectorAll(".title__li > a").forEach((element) => {element.style.color = "#fff";});
			document.querySelectorAll(".submenu").forEach(sub => {sub.style.height = "0px";});
			document.querySelectorAll(".list__packs > li > a").forEach(a => {a.style.color = "#fff";})	

			arrows[i].style.color = "#fff";
			arrows[i].style.transform = "rotate(0deg)";
	  	containerHeader[0].style.backgroundColor = "#0f0f0f";
	  	containerHeader[0].style.outline = "1px solid #0f0f0f";
	  	containerNav[0].style.backgroundColor = "#0f0f0f";
			submenu[i].style.height = "0px";
			header.style.height = "0px";
		})
	}


}
	const questionsLi = document.querySelectorAll(".questions__list > li");
	const textParagraph = document.createElement("p");
	textParagraph.classList.add("paragraph");
	let questionTrue = true;
	
	for(let k = 0; k < questionsLi.length; k++){
		questionsLi[k].addEventListener("click",() => {
			questionTrue = !questionTrue;
			if(questionTrue){
				questionsLi[k].appendChild(textParagraph);
				textParagraph.style.transition = "all 300ms ease";
				textParagraph.style.paddingTop = "12px";
				textParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor...sed do eiusmod sed do eiusmod sit amet mohhet ali junior lorem impum dolor sed do eiunsLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor...sed do eiusmod sed do eiusmod sit amet mohhet ali junior lorem impum dolor sed do eiuns";
				textParagraph.style.height = textParagraph.scrollHeight + "px";
				questionsLi[k].style.transition = "all 300ms ease";
			}else{
				questionsLi[k].style.height = questionsLi[k].scrollHeight + "px";
				questionsLi[k].style.height = "auto";
				textParagraph.style.paddingTop = "0px";
				textParagraph.style.height = "0px";
				textParagraph.style.overflow = "hidden";
			}
		})
	}



const sliderContainer = document.querySelector(".slider-container");
const sliderTitles = document.querySelector(".slider");
const titleParagraphs = document.querySelectorAll(".slide");

let index = 0;

function titles() {
  setInterval(() => {
    titleParagraphs[index].style.opacity = "0";
    titleParagraphs[index].style.transition = "opacity 300ms ease";

    setTimeout(() => {
      sliderTitles.appendChild(titleParagraphs[index]);
      titleParagraphs[index].style.transition = "none";
      titleParagraphs[index].style.opacity = "1";
      void titleParagraphs[index].offsetWidth;
      titleParagraphs[index].style.transition = "opacity 300ms ease";

      index = (index + 1) % titleParagraphs.length;
    }, 300);
  }, 5000);
}

titles();

function next() {
  setInterval(() => {
    const imgSliderFirst = document.querySelectorAll(".img-slider")[0];
    sliderContainer.style.transition = "transform 300ms ease";   
    sliderContainer.style.transform = "translateX(-200px)"; 

    setTimeout(() => {
      sliderContainer.insertAdjacentElement("beforeend", imgSliderFirst);
      sliderContainer.style.transition = "none"; 
      sliderContainer.style.transform = "translateX(0)"; 
    }, 300); 
  }, 5000); 
}
next();
*/


// Practic Array and objects

// let cont = 0;
// let res = Array(10).fill(cont++);
// console.log(res)

	// let object = {
	// 	nombres:"Francisco Tomas",
	// 	apellidos:"Ramirez Reynolds",
	// 	edad:19,
	// 	genero:"masculino",
	// 	soltero:true,
	// 	gato:"tomillo",
	// 	trabajo(element){	
	// 		element;
	// 	}
	// }
	// console.log(object.trabajo(true))


// Ejercicios de Arrays

// 1. Sumar elementos de un array
// Dado un array de números, devuelve la suma total.
// let array = [10,20,30,40,50,60,70,80,90,100];
// let res = array.reduce((a,b) => a + b)
// console.log(res)









// 2. Encontrar el número más grande
// Devuelve el número más grande en un array de números.
// let array = [10,20,30,40,50,222,60,70,80,90,1020];
// let newArray = [];
// let numMax = Math.max(...array);
// newArray.push(numMax);
// console.log(newArray);





// 3. Invertir array
// Devuelve un nuevo array con los elementos en orden inverso.
// let arrayNum = [100,200,300,400,500,600,700,800,900,1000];
// arrayNum.reverse();
// console.log(arrayNum);




// 4. Contar elementos repetidos
// Cuenta cuántas veces aparece un número en un array.



// 5. Eliminar duplicados
// Devuelve un nuevo array sin elementos repetidos.


// Ejercicios de Objetos
// Ejercicios Avanzados de Objetos

// 1. Clonación Profunda (Deep Clone) con manejo de referencias circulares
// Escribe una función deepClone(obj) que realice una clonación profunda de un objeto, 
// incluyendo objetos anidados, y que maneje correctamente las referencias circulares.
// Ejemplo:
// let a = { foo: "bar" };
// a.circular = a;
// let b = deepClone(a);
// b.foo = "baz";
// // a.foo debe seguir siendo "bar"























// 2. Comparación Profunda de Objetos
// Implementa una función deepEqual(obj1, obj2) que compare dos objetos y devuelva true si son
// idénticos en contenido (incluyendo propiedades anidadas) y false en caso contrario.
// Considera el orden de las claves y los tipos de datos.















// 3. Aplanar un Objeto (Flatten Object)
// Dado un objeto anidado, escribe una función flatten(obj) que retorne un objeto plano, donde las claves
// sean la ruta de acceso a cada valor usando notación de puntos.
// Ejemplo:
// const obj = { a: { b: 1, c: { d: 2 } }, e: 3 };
// flatten(obj) debería retornar: { "a.b": 1, "a.c.d": 2, "e": 3 }















// 4. Expandir un Objeto (Unflatten Object)
// Escribe una función unflatten(obj) que realice la operación inversa del ejercicio anterior.
// Dado un objeto con claves en notación de puntos, devuelve el objeto anidado original.
// Ejemplo:
// const flatObj = { "a.b": 1, "a.c.d": 2, "e": 3 };
// unflatten(flatObj) debería retornar: { a: { b: 1, c: { d: 2 } }, e: 3 }















// 5. Transformación Recursiva de Claves
// Crea una función transformKeys(obj, transformFunc) que reciba un objeto y una función de transformación,
// y devuelva un nuevo objeto en el que todas las claves hayan sido transformadas utilizando transformFunc.
// La transformación debe aplicarse recursivamente a objetos anidados.
// Ejemplo:
// transformKeys({ foo: { bar: 1 } }, key => key.toUpperCase())
// debería retornar: { FOO: { BAR: 1 } }















// 6. Filtrado Recursivo de Propiedades
// Implementa una función filterObject(obj, predicate) que recorra recursivamente un objeto y devuelva un nuevo objeto
// eliminando todas las propiedades que no cumplan con la condición definida por predicate.
// Por ejemplo, filtra todas las propiedades cuyo valor sea null, undefined o una cadena vacía.















// 7. Generador de Rutas (Path Generator)
// Implementa una función getPaths(obj) que recorra recursivamente un objeto y devuelva un array con todas
// las rutas a las propiedades finales (aquellas cuyo valor no sea un objeto).
// Ejemplo:
// const obj = { a: { b: 1, c: { d: 2 } }, e: 3 };
// getPaths(obj) debería retornar: ["a.b", "a.c.d", "e"]
