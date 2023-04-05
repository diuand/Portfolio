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

// window.addEventListener('wheel',(e )=>{
//     const delata = e.deltaY
//     const next_btn_click = new Event('click')
//     const current_time = new Date().getTime()

//     if (current_time - last_time < animation_duration){
//         e.preventDefault()
//         return
//     }

//     if (delata > 0 ){
//         next_btn.dispatchEvent(next_btn_click)
//     }else{
//         prev_btn.dispatchEvent(next_btn_click)
//     }
//     last_time = current_time
// })


home_button.addEventListener('click', ()=>{
    initial_index = 0
    set_initial_state()
});


// text animation


var typed = new Typed('#text_animation', {
    strings: ['Software Tester','<span class="text-danger">Hardware Developer</span>', '<span class="text-warning">Frontend Developer</span>'],
    loop:true,
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
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

// send mails

var mail  = document.getElementById("email");
var message_data = document.getElementById("message");
var name_sender = document.getElementById('name')    

var mail_mobile  = document.getElementById("email_mobile");
var message_data_mobile = document.getElementById("message_mobile");
var name_sender_mobile = document.getElementById('name_mobile') 

    // Define the Send_email function
    function Send_email(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "nicoara.andrei98@gmail.com ",
            Password : "30EE123EEF3D05B8DBD1ACAB04CC9563D9F0",
            From : 'nicoara.andrei98@gmail.com',
            To : 'nicoara.andrei98@gmail.com',
            ReplyFrom : mail.value,
            Subject : ` mail from ${mail.value}`,
            Body :  ` name : ${name_sender.value} \r\n mail from : ${mail.value} \r\n message: ${message_data.value} `
        }).then(
          message => alert("MESSSAGE SENT")
        );
    }
// Define the Send_email function
function Send_email_mobile(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nicoara.andrei98@gmail.com ",
        Password : "30EE123EEF3D05B8DBD1ACAB04CC9563D9F0",
        From : 'nicoara.andrei98@gmail.com',
        To : 'nicoara.andrei98@gmail.com',
        ReplyFrom : mail_mobile.value,
        Subject : ` mail from ${mail_mobile.value}`,
        Body :  ` name : ${name_sender_mobile.value} \r\n mail from : ${mail_mobile.value} \r\n message: ${message_data_mobile.value} `
    }).then(
      message => alert("MESSSAGE SENT")
    );
}