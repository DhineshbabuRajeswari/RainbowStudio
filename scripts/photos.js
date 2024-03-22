let menubtn = document.getElementById('menubtn')
let nav = document.querySelector('.navigation')
let navLine = document.querySelectorAll(".navigation ul div")
let count = 0


menubtn.addEventListener('click',()=>{
    nav.classList.toggle('menubutton')
})


let updateLine = () => {
    navLine.forEach((ind)=>{
        ind.classList.remove("activeline")
    })
    navLine[count].classList.add("activeline")
}


navLine.forEach((val,index,arr)=>{
    val.addEventListener('click',()=>{
        count = index
        updateLine()
    })
})

let slides = document.querySelectorAll('.slides')
let slideSize = slides.length
let backButton = document.getElementById("prev-btn")
let forwardButton = document.getElementById("nxt-btn")
let initializer = 0


let LinePar = document.querySelector('.linesParent')



let updateFunction = () => {
    slides.forEach((slide)=>{
        slide.classList.remove('activate')
    })

    lines.forEach((line) => {
        line.classList.remove('lineColor')
    })

    slides[initializer].classList.add('activate')
    lines[initializer].classList.add('lineColor')
}

let Forwardfn = () => {
    if(initializer<slideSize-1){
        initializer++
    }else{
        initializer=0
    }
    updateFunction()
}

let Backwardfn = () => {
    if(initializer>0){
        initializer--
    }else{
        initializer=slideSize-1
    }
    updateFunction()
}

backButton.addEventListener('click',()=>{
    Backwardfn()
})

forwardButton.addEventListener('click',()=>{
    Forwardfn()
})

for(let i=0; i<slideSize; i++){
    let newElement = document.createElement('div')
    newElement.className ='line'
    LinePar.appendChild(newElement)
}

let lines = document.querySelectorAll('.line')
lines[initializer].classList.add('lineColor')

lines.forEach((line,index,array)=>{
    line.addEventListener('click',()=>{
        initializer = index
        updateFunction()
    })
})

setInterval(()=>{
    if(initializer<slideSize-1){
        initializer++    
    }else{
        initializer=0
    }
    updateFunction()
},5000)

// Review Slider

let rSlides = document.querySelectorAll(".reviewSlide")
let rSlideSize = rSlides.length
let rleft = document.getElementById("revLeft")
let rright = document.getElementById("revRight")
let SlideInitializer = 0

let UpdateElement = () => {
    rSlides.forEach((slide)=>{
        slide.classList.remove("active")
    })
    rSlides[SlideInitializer].classList.add("active")
}

let leftUpdate = () => {
    if(SlideInitializer < rSlideSize-1){
        SlideInitializer++
    }else{
        SlideInitializer=0
    }
    UpdateElement()
}

let rightUpdate = () => {
    if(SlideInitializer > 0){
        SlideInitializer--
    }else{
        SlideInitializer = rSlideSize-1
    }
    UpdateElement()
}

rleft.addEventListener('click', () => {
    leftUpdate()
})

rright.addEventListener('click', () => {
    rightUpdate()
})

setInterval(() => {
    if(SlideInitializer < rSlideSize-1){
        SlideInitializer++
    }else{
        SlideInitializer=0
    }
    UpdateElement()
},10000)

// rightSide slider

let newSlide = document.querySelectorAll(".photoboxSlide")
let newInt = 0

let SliderUpdate = () => {
    newSlide.forEach((slide) => {
        slide.classList.remove("newActive")
        slide.classList.add("hidden")
    })
    newSlide[newInt].classList.remove("hidden")
    newSlide[newInt].classList.add("newActive")
}

setInterval(()=>{
    if(newInt < newSlide.length-1){
        newInt++
    }else{
        newInt=0
    }
    SliderUpdate()
}, 3000)

// let upBtn = document.querySelector(".upBtn")

// upBtn.addEventListener('scroll',() => {
//     scrollUpfn()
// })


// let scrollUpfn = () => {
//     upBtn.classList.remove(display)
//     upBtn.classList.add(display)
// }