const sections = document.querySelectorAll('.slide_show')
const prev_btn = document.querySelector('.prev')
const next_btn = document.querySelector('.next')
const navbar = document.querySelector('nav')
const contact_mobile = document.querySelector('.contact_mobile')

// desktop

const home_button = document.querySelector('.home_button')


let initial_index = 0
const animation_duration = 500
let last_time = 0



// desktop



const set_initial_state = () => {
    sections.forEach((section, i) => {
        if (i == initial_index){
            toggle_text(i,'show')
            section.scrollIntoView({behavior : 'smooth'})
        } else {
            toggle_text(i,'hide')
        }
    });
}

window.addEventListener('load', set_initial_state);


  



const toggle_text = (index,state) =>{
    if (state == 'show'){
        sections.forEach((section, i) => {
            if (i == index){
                section.querySelector('.text').classList.add('show')
            }
        });
    }else{
        sections.forEach((section, i) => {
            if (i == index){
                section.querySelector('.text').classList.remove('show')
            }
        });
    }
}




next_btn.addEventListener('click',()=>{
    if (initial_index > 3) return
    toggle_text(initial_index,'hide')
    initial_index++
    sections.forEach((section, i) => {
        if (i == initial_index){
            toggle_text(i,'show')
            section.scrollIntoView({behavior : 'smooth'})
        }
    });
})

prev_btn.addEventListener('click',()=>{
    if (initial_index < 1) return
    toggle_text(initial_index,'hide')
    initial_index--
    sections.forEach((section, i) => {
        if (i == initial_index){
            toggle_text(i,'show')
            section.scrollIntoView({behavior : 'smooth'})
        }
    });
})

window.addEventListener('wheel',(e )=>{
    const delata = e.deltaY
    const next_btn_click = new Event('click')
    const current_time = new Date().getTime()

    if (current_time - last_time < animation_duration){
        e.preventDefault()
        return
    }

    if (delata > 0 ){
        next_btn.dispatchEvent(next_btn_click)
    }else{
        prev_btn.dispatchEvent(next_btn_click)
    }
    last_time = current_time
})


home_button.addEventListener('click', ()=>{
    console.log('Intrat')
    initial_index = 0
    set_initial_state()
    console.log('ok')
});

// mobile

if (window.innerWidth < 577){
    document.body.style.overflow = "scroll";
    window.addEventListener('scroll',(e )=>{
        const scroll_top = window.scrollY
        if (scroll_top > 0){
            contact_mobile.style.opacity = 0
            navbar.classList.add('nav_mobile_show')
        }else{
            contact_mobile.style.opacity = 1
           
            navbar.classList.remove('nav_mobile_show')
        }
    })
    
    contact_mobile.addEventListener('click',()=>{
        console.log('dassda')
        contact_mobile.classList.add('invert_colors')
    })
}
