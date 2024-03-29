const tagsEle=document.getElementById('tags')
const textarea=document.getElementById('textarea')

textarea.focus()
textarea.addEventListener('keyup',(e) => {
    createTags(e.target.value) //to enter the text
    if(e.key==='Enter'){ //on clicking enter button
        //setTimeout is used here to clear input after specified no. of mllisec, here 10
        setTimeout(() => {
            e.target.value = '' //we empty the text field first
        }, 10)
        randomSelect()
    }
})

function createTags(input){
    //we are splitting at every comma
    const tags=input.split(',')
    .filter(tag => tag.trim()!=='')//ignoring empty strings
    .map(tag => tag.trim())//trimming extra white spaces

    tagsEle.innerHTML=''
    tags.forEach(tag => {
        const tagssEl=document.createElement('span')//creation of element
        tagssEl.classList.add('tag')//assigning class name
        tagssEl.innerText=tag //adding the text
        tagsEle.append(tagssEl) //adding the tag
    })
}

function randomSelect(){
    const times=30 //no. of times each element highlights before stopping
    const interval=setInterval(() => { 
            const randomTag=pickRandomTag() //picks random tag
            highlightTag(randomTag) //highlights it for 100ms

            setTimeout(() => { //this function waits 90ms to unhighlight the tag
                unHighlightTag(randomTag)
            }, 90)
    }, 100)

    setTimeout(() => {
        clearInterval(interval) //to clear everything i.e. highlighting unhighlighting etc

        //to finally highlight one option
        setTimeout(() => {
            const randomTag=pickRandomTag()
            highlightTag(randomTag)
        }, 100)

    } , times*100) //it happens after all tags are combinely highlighted given no. of times * each tag highlighting period
}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}
function unHighlightTag(tag){
    tag.classList.remove('highlight')
}