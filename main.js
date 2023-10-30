let textare=document.querySelector ("textarea")
let font =document.querySelector (".font")
let button = document.querySelectorAll (".butto button")




textare.onkeyup = function () {

    font.textContent= textare.value ;
}
button[0].onclick=function () {
textare.style.fontFamily="'Lobster', sans-serif"
font.style.fontFamily="'Lobster', sans-serif"
}
button[1].onclick=function () {
textare.style.fontFamily="'Wallpoet', sans-serif"
font.style.fontFamily="'Wallpoet', sans-serif"
}
button[2].onclick=function () {
textare.style.fontFamily="'Shadows Into Light', cursive"
font.style.fontFamily="'Shadows Into Light', cursive"
}
button[3].onclick=function () {
textare.style.fontFamily="'ZCOOL XiaoWei', sans-serif"
font.style.fontFamily="'ZCOOL XiaoWei', sans-serif"
}    