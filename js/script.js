
//Declaration variables from document
let starts = document.getElementById('starts');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');

//Events listener
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    starts.style.left = value + 'px';
})