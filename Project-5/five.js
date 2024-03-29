const left=document.querySelector('.left')
const right=document.querySelector('.right')
const container=document.querySelector('.container')

//if mouse enters left area,that effect shd be applied on container
left.addEventListener('mouseenter',() => {
    container.classList.add('hover-left')
})
left.addEventListener('mouseleave',() => {
    container.classList.remove('hover-left')
})
//same with right
right.addEventListener('mouseenter',() => {
    container.classList.add('hover-right')
})
right.addEventListener('mouseleave',() => {
    container.classList.remove('hover-right')
})