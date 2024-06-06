
let params = new URL(document.location).searchParams;
let fullname = params.get("0001"); 
let age = parseInt(params.get("0002"));
console.log(fullname);
console.log(age);