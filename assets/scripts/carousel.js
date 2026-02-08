// Render Gallery Carousel
// Image Directory and Variables
// Settings
const timing = 4500 // Timing in Miliseconds
const transDur = 400 // Transition Duration in Miliseconds
const startSlide = 0 // What Slide to start with
const autoplay = true // Autoplay Carousel on Load
const img = [  // JS Array of all ["File Name"]'s
    "JonAndJen-Sept2021.png",
    "JonJenPicnic-2021.png",
    "Nino_CyberHeist-2024.png",
    "SakuraAid-Sept2021.png",
    "SakuraATM9-Jul2024.png",
    "SakuraBlacksmith-Mar2023.png",
    "SakuraCouch-Sept2023.png",
    "SakuraDragonDiscovery-2020.png",
    "SakuraForestHike-May2022.png",
    "SakuraFrozenV2-Apr2022.png",
    "SakuraOffice-Apr2024.png"
]
// Data Storage
const imgDir = "assets/images/render-gallery/carousel/"
var slides = []
var pis = []
var piD = []
var arrLeng = img.length;
var slideshow
var imgTemp
var isPaused
// HTML Elements
const container = document.getElementById('slideContainer')
const pp = document.getElementById('playPause')
const piContain = document.getElementById('positionIndicator')
// Announce Configurations in Console
console.group("Configurations");
console.groupCollapsed("Image List is: ");
for (let i = 0; i < img.length; i++) {
    console.log(img[i])
};
console.groupEnd("Loading Images: ");
console.log("Caruousel Auto-Progressing after " + timing + " Miliseconds");
console.log("Transitions last " + transDur + " Miliseconds");
console.log("Staring on Slide #" + (startSlide + 1) + ", with a total of " + img.length + " slides");
if (autoplay == true) {
    console.warn("Autoplay set to " + autoplay);
} else {
    console.log("Autoplay set to " + autoplay);
};
console.groupEnd("Configurations");
// Create Elements
for (let i = 0; i < img.length; i++) {
    imgFull = imgDir + img[i]
    // Create Slide Element
    slides.push(document.createElement("div"))
    slide = slides[i]
    slide.classList.add('slide')
    slide.setAttribute('id', 'slide-' + i)
    slide.style.transitionDuration = transDur + "ms"
    // Create Image Element
    imgTemp = document.createElement('img')
    imgTemp.classList.add("carouselImage")
    imgTemp.setAttribute("src", imgFull)
    // Create Main Position Indicator Elements
    pis.push(document.createElement('div'))
    pi = pis[i]
    pi.setAttribute('id', 'pi-' + i)
    pi.setAttribute('active', false)
    pi.setAttribute('onclick', 'setSlide(3,' + i + ')')
    pi.classList.add('position-ind')
    // pi.setAttribute('style', "flex-basis:" + (100 / arrLeng) + "%;" + "background-image: url('" + imgFull + "');")
    pi.style.flexBasis = (100 / arrLeng) + "%"
    pi.style.backgroundImage = 'url(' + imgFull + ')'
    // Create Dividers for Position Indicators
    piD.push(document.createElement('div'))
    piD[i].classList.add('pi-divider')
    piD[i].innerHTML = i
    // Finalise Element Creation
    slide.appendChild(imgTemp)
    container.appendChild(slide)
    piContain.appendChild(pi)
    piContain.appendChild(piD[i])
    // Refered to in function updateVDV()
    slide.style.minWidth = container.clientWidth.toString() + "px";
}
// Start Slideshow
if (autoplay == true) {
    offset = startSlide;
    pis[offset].setAttribute('active', true)
    slideshow()
    isPaused = false
    pp.childNodes[1].style.transform = "translateY(-300%)"
    pp.childNodes[5].style.transform = "translateY(-300%)"
} else {
    isPaused = true
    pp.childNodes[1].style.transform = "translateY(0%)"
    pp.childNodes[5].style.transform = "translateY(0%)"
}
function slideshow() {
    timer = setInterval(() => {
        setSlide(0, null)
    }, timing)
}
// Managing the damn thing
function setSlide(mode, slide) {
    // console.groupCollapsed("%cUpdated Slideshow", "color: skyblue;")
    if (mode == 0) { // Next Slide
        if (offset == slides.length - 1) {
            offset = 0
        } else {
            offset = offset + 1
        }
        console.log("Progressing to next slide, slide #" + offset)
    } else if (mode == 1) { // Previous Slide
        if (offset == 0) {
            offset = slides.length - 1
        } else {
            offset = offset - 1
        }
        console.log("Going back to previous slide, slide #" + offset)
    } else if (mode == 2) { // Pause Slideshow
        if (isPaused == false) {
            clearInterval(timer)
            isPaused = true
            pp.childNodes[1].style.transform = "translateY(0%)"
            pp.childNodes[5].style.transform = "translateY(0%)"
            console.log("Pausing Carousel")
        } else {
            slideshow()
            isPaused = false
            pp.childNodes[1].style.transform = "translateY(-300%)"
            pp.childNodes[5].style.transform = "translateY(-300%)"
            console.log("Resuming Carousel")
        }
    } else if (mode == 3) { // Sets Slide to a specific one
        clearInterval(timer)
        offset = slide;
        slideshow()
    }
    finalOffset = (offset * 100) + "%"
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-" + finalOffset + ")"
        pis[i].setAttribute('active', false)
    }
    pis[offset].setAttribute('active', true)
}

// All this code does is updates the width of all elements with automatic widths dependent on the Client Width
var viewportWidth = document.getElementsByTagName('body')[0].clientWidth;
var viewportHeight = document.getElementsByTagName('body')[0].clientHeight;
function updateVDV() {
    viewportWidth = document.getElementsByTagName('body')[0].clientWidth;
    viewportHeight = document.getElementsByTagName('body')[0].clientHeight;
    // console.log(viewportWidth + "px, " + viewportHeight + "px")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.minWidth = container.clientWidth.toString() + "px";
    }
}