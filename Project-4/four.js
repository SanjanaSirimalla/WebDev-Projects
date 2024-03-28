const search=document.querySelector('.search')
const text=document.querySelector('.text')
const btn=document.querySelector('.btn')

btn.addEventListener('click',() => {
    search.classList.toggle('active')
    //to highlight the text area when active
    text.focus()
})