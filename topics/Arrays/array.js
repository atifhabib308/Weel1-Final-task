var index;
// console.log('inside function');
document.addEventListener('DOMContentLoaded', () => {
    let mybtns = document.querySelectorAll('.btn');
    mybtns.forEach(function (btn) {
        btn.addEventListener('click', () => {
            mybtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active')
        })
    })

})
function showAllNone(){
    var y = document.getElementById('main')
    y.style.display = 'none'
}
function showContant(){
    let show = document.getElementById('main')
    show.style.display = 'block'
}
function displayFunction(getId) {
    showAllNone();
    console.log("button pressend");
    let x = document.getElementById('one');
    if (getId == 1) {
        showContant()
        x.style.display = 'block'
    } else {
        x.style.display = 'none'
    }
    x = document.getElementById('two')
    if (getId == 2){
        showContant()
        x.style.display = 'block'
    }else{
        x.style.display = 'none'
    }
    x = document.getElementById('three')
    if(getId == 3){
        showContant()
        x.style.display = 'block'
    }else{
        x.style.display = 'none'
    }
    x = document.getElementById('four')
    if(getId == 4){
        showContant()
        x.style.display = 'block'
    }else{
        x.style.display = 'none'
    }
    x = document.getElementById('five')
    if(getId == 5){
        showContant()
        x.style.display = 'block'
    }else{
        x.style.display = 'none'
    }
}