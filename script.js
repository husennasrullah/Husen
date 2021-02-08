const h12 = document.querySelector("p");
const h1s = document.querySelectorAll("p");
console.log("head:", h12);
console.log("head ", h1s);

// let styleList = h1s[1].classList;
// console.log(styleList);
// console.log(styleList.add("texBold"));  //menambahkan css pada id h1s
// console.log(styleList);
// console.log(styleList.remove("bgAqua"));
// console.log(styleList);

//h1s[1].innerHTML = 'ini untuk <a href ="/index2.html"> paragraf 2 </a>'

//Array
let names = ["admin", 2, true];
names.push = ["empat"]
console.log(names);
names.pop()
console.log(names);
names.shift()
console.log(names);
names.unshift(0)
console.log(names);

//Array 

let user = {
    name : "user",
    age : 20,
    "add-ress":"tangerang"
}

let user2 = {
    name : "user",
    age : 21
}

let user3 = {
    name : "operator",
    age : 23
}

console.log(user.name);
console.log(user["add-ress"]);

//array of object 
let users = [user, user2, user3]

for (let index=0; index < users.length; index++ ){
    const element = users[index];
    console.log("element :", element);
}

function fn1 (params){
    console.log("fn1");
}
 fn1()

 const fn2 = function (params){
     console.log("fn2");
 }
 fn2()

 //penulisan function tanpa parameter=========================
 //const fn5 =() => {}
 const fn5 = _ => {}

 //contoh callback function =====================
 const fn3 = params => {
     console.log("fn3");
     params()
 }
 fn3(fn2)

 //contoh callback Function ================

 const fn7 = function (params){
    console.log("Total:", params);
 } 

 const fn6 = (param1, param2, cb) => {
     console.log("fn6");
     const total = param1 + param2
     cb(total)
 }
 fn6 (1,2,fn7)


 //============================

 const fn4 = (param1, param2) => {}

 // promise function =====================
 const promiseFn = new Promise((resolve, reject) => {
     console.log("promise");
    // resolve (3)
    // reject ("Gagal")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(() => reject ("gagal"))
 })
console.time("waktu")

promiseFn
    .then(value => {
        console.log ("value: ", value);
    })
    .catch(err => {
        console.error("Error :", err);
    })
    .finally(()=>{
        console.info ("finally");
        console.timeEnd("waktu") // menghitung waktu 
    })

//For each==========================
let users2 = [] // membuat objek baru yg berisi objek dan menambahkan data baru didalamnya 
users.forEach ((value, index, arrayUsers) => {
    console.info("value :", value);
    console.warn("index :", index);
    console.log("arrayUsers :", arrayUsers);
    // let newData = {
    //     name : value.name,
    //     age : value.age,
    //     gender : value.age > 21 ? "L" : "P"
    // }
    // users2.push(newData)

    users2.push({...value, gender : value.age > 21 ? "L" : "P"}) //...value untuk memunculkan semua data yang telah dimiliki sebelumnya oleh sebuah objek 
})
console.log("users2 :", users2)

//fungsi Find =================================
const dataFind = users.find(value => value.age >= 21 )
console.log("dataFind :", dataFind);

const dataFind2 = users.filter(value => value.age >= 21 )
console.log("dataFind2 :", dataFind2);

//map===================== untuk menambah element baru dalam array 
const users3 = users.map(value => ({
    ...value, gender : value.age > 21 ? "L" : "P"
}))
console.log("users3 :",users3);

// buat form nama, ttl, alamat
// buat tabel daftar nama : no, nama, umur, alamat
