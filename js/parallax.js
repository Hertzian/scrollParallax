// vars
const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const text = document.getElementById('text');
// const offset = window.pageYOffset;
// scroll = window.pageYOffset;

// event listeners
document.addEventListener('scroll',function (e){
    let offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll / 5) + '%';
    // console.log(offset);
});

document.addEventListener('scroll',function (e){
    let offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 + scroll / 5) + '%';
    layer2.style.left = scroll / 50 + '%';
});

document.addEventListener('scroll',function (e){
    let offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 + scroll / 5) + '%';
    text.style.top = -scroll / 20 + '%';
});

