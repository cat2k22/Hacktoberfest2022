const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.links')
const links = document.querySelectorAll('#nav-link')
const icons = document.querySelector('.icons')


burger.addEventListener('click', function(){
    sidebar.classList.toggle('show')
    if(sidebar.classList.contains('show')){
        burger.classList.add('active')
        icons.style.width = '100%'
        icons.style.justifyContent = 'right'

    }else{
        burger.classList.remove('active')
    }
})

links.forEach(function(link){
    link.addEventListener('click', function(){
        sidebar.classList.toggle('show')
        if(sidebar.classList.contains('show')){
            burger.classList.add('active')
            icons.style.width = '100%'
            icons.style.justifyContent = 'right'
    
        }else{
            burger.classList.remove('active')
        }
    })
})

const toTop = document.querySelector('.back-top')

window.addEventListener('scroll', function(){
    if(pageYOffset > 75){
        toTop.classList.add('active')
    }else{
        toTop.classList.remove('active')
    }
})

console.log(pageYOffset)

gsap.registerPlugin(ScrollTrigger)

gsap.from('.am-main-left',{
    scrollTrigger : 'main',
    duration :1,
    opacity: 0,
    x : -400,
    stagger: .3,
})

gsap.from('.am-main-right',{
    scrollTrigger : 'main',
    duration :1,
    opacity: 0,
    x : 400,
    delay : .7
})

gsap.from('.am-about-top', {
    scrollTrigger : '.about',
    duration :1.5,
    y : -130,
    opacity : 0,
    delay : .2
})

gsap.from('.am-about-left', {
    scrollTrigger : '.am-about-left',
    duration :1,
    x : -150,
    opacity : 0,
    delay : 1
})

gsap.from('.am-project', {
    scrollTrigger : '.am-project',
    duration :1,
    x : -150,
    opacity : 0,
    stagger : .5

})

gsap.from('.am-project-right',{
    scrollTrigger : '.am-project-right',
    duration :1.5,
    opacity: 0,
    x : 400,
    delay : .5
})

gsap.from('.am-project-right-2',{
    scrollTrigger : '.am-project-right-2',
    duration :1.5,
    opacity: 0,
    x : 400,
})

gsap.from('.am-project-left',{
    scrollTrigger : '.am-project-left',
    duration :1.5,
    opacity: 0,
    x : -400,
})


gsap.from('.am-contact-top', {
    scrollTrigger : '.header h1',
    duration :1.5,
    y : -130,
    opacity : 0,
    delay: 1
})

gsap.from('.am-contact-left',{
    scrollTrigger : '.am-contact-left',
    duration :1,
    opacity: 0,
    x : -400,
    stagger: .3,
    delay: 1.5
})

gsap.from('.am-contact-opacity', {
    scrollTrigger : '.am-contact-left',
    duration :1,
    opacity : 0,
    delay :2.3
})


gsap.from('.am-contact-bottom', {
    scrollTrigger : '.am-contact-left',
    duration :.3,
    y : 70,
    opacity:0,
    delay: 2
})

