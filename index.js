// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// var nilai = 10;
// var nilai = 20;
// console.log (nilai)

// let x = 30
// console.log (x)

// //latihan block scope
// let z = 2;
// if (false) {
//     let z=3;
// }

// console.log(z);

// //belajar function
// function cetak (a,b,c){
//     console.log(a+b+c);
// }

// cetak("Selamat "," Datang "," Para "+" Juara");

// let perkalian = function(a,b){
//     return a*b;
// }

// let hasil = perkalian(20,3)
// console.log(hasil);

// //belajar array

// let hewan = ["kucing","sapi","monyet"];
// console.log (hewan[1]);

// //array yang memiliki tipe data yang berbeda
// let hewan2 = ["kucing",20,false];
// console.log (hewan2[2]);
// // atau
// let hewan3 = ["kucing",20,false];
// let fun = function() {
//     return "hello world";
// }
// let fun2 = ["kucing",20,false,fun];
// console.log (fun2[3]());

// //memanipulasi arrray (menambahkan, menghapus, menampilkan seluruh)
// //menambahkan
// let a = [];
// a[0]=1;
// a[1]=2;
// a[2]=3;
// console.log (a);
// //menghapus
// let siswa = ["Lukman", "Nul","Hakim"];
// siswa[1]=undefined;
// console.log(siswa);

//belajar foreach
// let mobil = ["mpv","suv","sport car","hyper car"];
// mobil.forEach(jajal =>{
//     console.log(jajal);
// })
// //sama halnya seperti menggunakan loop
// for(let i=0; i<mobil.length; i++) {
//     console.log(mobil[i]);
// }
//forEach dua dimensi
// let mobil2 = ["mpv","suv","sport car","hyper car"];
// mobil2.forEach(jajal2 =>{
//     if(jajal2 == "mpv" || jajal2 == "hyper car"){
//         console.log(jajal2);
//     }
    
// })
// // latihan method map

// let latihanMap = mobil2.map (data=> data=="suv");
// console.log(latihanMap);
// //atau
// let latihanMap2 = mobil2.map(data2=>{
//     return data2=="hyper car"
// })
// console.log(latihanMap2);

// var s = "";
// for(var i = 0; i < 3; i++) {
// 	for( var j = 0; j < 5; j++) {
// 		s+= "*";
// 	}
// 		s+= "\n";
// }
// console.log (s);

// for(var i = 0; i < 5; i++) {
// 	s+= "*";
// }
// 	console.log (s);

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
