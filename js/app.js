const btn=document.querySelector('button');
const input=document.querySelector('input');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const p=document.createElement('p');
    let text;
    if(input.value.length<3){
        text=input.value.toUpperCase();
    }else{
        const three=input.value.substring(0,3).toLowerCase();
        const rest=input.value.substring(3);
        text=three+rest;
    }
    p.textContent=text;
    document.body.appendChild(p);
});
