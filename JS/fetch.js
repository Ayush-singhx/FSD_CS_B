const url="https://api.github.com/users/ayush-singhx";
const res=fetch(url);
res.then((res)=>{
    return res.json();    
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("error",err);
}).finally(()=>console.log("finally executed"));