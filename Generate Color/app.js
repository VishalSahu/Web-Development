const btn = document.querySelector('button');
const h3 = document.querySelector('h3');

btn.addEventListener('click',function(){
    const makecolour = CreateColor();
    document.body.style.backgroundColor = makecolour;
    h3.innerText = makecolour;
    document.body.style.transition = "all 1s";
    btn.style.transition = "all 1s";

})

const CreateColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    if(r<70 || g<70 || b<70){
    document.body.style.color = "white";
    btn.style.color = "white";
    }
    return `rgb(${r},${g},${b})`;
}
