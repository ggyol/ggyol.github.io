let str="这里输入文字哦";
let i=0;
let p=document.getElementById('p');
let timer=setlnterval(()=>{
    p.innerText+=str[i];
    i++;
    if(i===str.length){
        clearlnterval(timer);
    }
},400);