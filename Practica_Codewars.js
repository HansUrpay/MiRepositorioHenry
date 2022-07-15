/* 1.- Tienes que buscar todos los números desde el 1 inclusive hasta el número
x dado, que tengan el dígito d dado.
El valor de d siempre será 0 - 9.
El valor de x siempre será mayor que 0.
Tienes que volver como una matriz la cuenta de estos números,
su suma y su producto.
Por ejemplo:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]
Si no hay números que incluyan el dígito, devuelve [0,0,0].*/
function numbersWithDigitInside(x, d) {
 let array=[];
 let array1=[];
 let suma=0;
 let cantidad=0;
 let producto=1;
 for(let i=1; i<=x; i++){
     if(i.toString().includes(d.toString())){
         array.push(i);
        }
    }
 if(array.length>0){
     for(let i=0; i<array.length; i++){
         cantidad+=1;
         suma+=array[i];
         producto*=array[i]
        }
     array1.push(cantidad,suma,producto);
     return array1;
   }
 return [0,0,0];
}

/* 2.- Se suponía que su compañero de trabajo debía escribir una función de ayuda simple para poner
en mayúscula una cadena (que contiene una sola palabra) antes de irse de vacaciones.
Desafortunadamente, ahora se han ido y el código que te dieron no funciona. Corrija la
función de ayuda que escribieron para que funcione según lo previsto (es decir, haga que el
primer carácter en la cadena "palabra" esté en mayúscula).
No se preocupe por los números, caracteres especiales o tipos que no son cadenas 
que se pasan a la función. La longitud de la cadena será de 1 carácter a 10 caracteres, pero nunca estará vacía.*/
function capitalizeWord(word) {
    let first = word[0].toUpperCase();
   for(let i=1; i<word.length; i++){
     first+=word[i];
   }
   return first;
}

/* 3.- Dada una matriz de enteros.
Devuelve una matriz, donde el primer elemento es el recuento de números positivos y el segundo elemento es la suma de números negativos. 0 no es ni positivo ni negativo.
Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.*/
function cuentaNumeros(array){
  let suma=0;
  let totalNegativos=0;
  let array1=[];
  for (let i=0; i<array.length; i++){
    if(array[i]>0){
      suma+=1;
    } else if(array[i]<0){
      totalNegativos+=array[i];
    }
  }
  array1.push(suma, totalNegativos);
	if (array.length===0){
    return array;
  } 
  return array1;
}