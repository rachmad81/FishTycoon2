let data=[];

fetch("data.json")
.then(r=>r.json())
.then(json=>{

data=json;

let daftar=[];

data.forEach(d=>{
    daftar.push(d.a);
    daftar.push(d.b);
});

daftar=[...new Set(daftar)].sort();

const s1=document.getElementById("input1");
const s2=document.getElementById("input2");

daftar.forEach(nama=>{

let o1=document.createElement("option");
o1.value=nama;
o1.textContent=nama;
s1.appendChild(o1);

let o2=document.createElement("option");
o2.value=nama;
o2.textContent=nama;
s2.appendChild(o2);

});

});

function cari(){

let a=input1.value;
let b=input2.value;

let hasil="Tidak ditemukan";

for(let d of data){

if(
(d.a===a && d.b===b)||
(d.a===b && d.b===a)
){
hasil=d.hasil;
break;
}

}

document.getElementById("hasil").innerHTML=hasil;

}