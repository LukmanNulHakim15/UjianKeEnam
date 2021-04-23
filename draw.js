//Kotak
function kotak(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < 5; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(kotak(3));


//Segiti
function segitigasiku(panjang) {
    let hasil2 = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil2 += '* ';
        }
        hasil2 += '\n';
    }
    return hasil2;
}
console.log(segitigasiku(5));


//Segitiga Terbalik

function segitigaterbalik(panjang) {
    let hasil3='';
    for (let x=0; x < panjang; x++ ){
        for (let z=5; z > x ; z-- ){
            hasil3 +='*';
        }
        hasil3 += '\n';
    }
    return hasil3;
}
console.log(segitigaterbalik(5));

//Kotak selang seling
function kotakselangseling(panjang) {
    let hasil4 = '';
    var i=0;
    var j=0;
    for (  i = 0; i < panjang; i++) {
        for ( j = 1; j <= 5; j++) {
            if(( i %2 == 1 || j%2 ==0) && ( i %2 == 0||j%2 == 1) ) {
                hasil4 += '!';
            } 
            else {
                hasil4 += '*';
            }
           
        }
        hasil4 += '\n';
        }
        return hasil4;
    }
 console.log(kotakselangseling(3));


 //Kotak Pola
 function kotakpola(panjang) {
    let hasil5 = '';
    var a = 0;
    var b = 0;
    for ( a = 0; a < panjang; a++) {
        for ( b = 0; b < 5; b++) {
            if( b % 3 == 2)  {
                hasil5 += '!';
            } else {
                hasil5 += '*';
            }
                
        }
        hasil5 += '\n';
    }
    return hasil5;
}
console.log(kotakpola(5));
