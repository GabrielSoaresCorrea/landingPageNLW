window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonScroll(){
    if(scrollY > 450){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expended')
}

function closeMenu(){
    document.body.classList.remove('menu-expended')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about content`)


function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    
    const sectionTopReachOrPassedTarfetLine = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTarfetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
}