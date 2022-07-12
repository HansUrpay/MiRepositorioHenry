/*Tienes que buscar todos los números desde el 1 inclusive hasta el número x dado, que tengan el dígito d dado.
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
        console.log(i);
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
