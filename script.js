const navigation = document.getElementById("nav")
const menuBtn = document.getElementById("menu_btn")
const exit_btn = document.getElementById("exit_btn")

menuBtn.addEventListener('click', ()=> {
    navigation.style.transform = 'translateX(0)'
})

exit_btn.addEventListener('click', ()=> {
    navigation.style.transform = 'translateX(100%)'
})