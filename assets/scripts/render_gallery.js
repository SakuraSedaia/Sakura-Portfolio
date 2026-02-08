// Image Directory and Variables
const imgList = [  // JS Array of all [Image String, Toggle Label, Label Header, Label Desc]
["assets/images/AmiasRender.jpg", 1, "", ""],
    ["assets/images/BannerRender.png", 1, "", ""],
    ["assets/images/BarSet_Preview4.png", 1, "", ""],
    ["assets/images/Glasses_Render.png", 1, "", ""],
    ["assets/images/Jenneifer&Jonathan_Picnic_HalfRes.png", 1, "", ""],
    ["assets/images/JenReading.png", 1, "", ""],
    ["assets/images/Jon_and_Jen_Pik_Run.png", 1, "", ""],
    ["assets/images/JonAndJen_Cuddling.png", 1, "", ""],
    ["assets/images/MC_Tail_RigShowcase.png", 1, "", ""],
    ["assets/images/Render-PostProcess.png", 1, "", ""],
    ["assets/images/SakuraInjured.jpg", 1, "", ""],
    ["assets/images/TailRig_Render.png", 1, "", ""],
    ["assets/images/Tanya-Ears_Render.png", 1, "", ""],
    ["assets/images/Utami-Ears_Render.png", 1, "", ""],
    ["assets/images/Viella-TestRender-RiverTunnel2-Composite.png", 1, "", ""],
    ["assets/images/Waterfall Valley.png", 1, "", ""]
]
var carousel = document.getElementById('carouselSlide')
var durationInput
var galleryTimer
var currentImg
var startImage = imgList[0][0]
let state = 1
let durationVal = 3000 // Duration each slide is shown in Miliseconds
var isPaused = false
var playPause = document.getElementById('playPause')
var posContainer = document.getElementById('positionIndicator')
var indicators = []
// Setup lines
let a = 0
while (a < imgList.length) { // Creates the Position Indicators
    var tempIndicator = document.createElement('div')
    indicators.push(tempIndicator);
    posContainer.appendChild(indicators[a])
    indicators[a].innerHTML = "*"
    indicators[a].classList.add('posIndicator')
    indicators[a].setAttribute('onclick', 'directPosition(' + a + ')')
    a++
}
carousel.setAttribute('src', startImage)
updatePosDisplay(0)
console.log('Began Carousel, Starting with "' + imgList[state][0] + '", Index = ' + state + ", using a duration of " + durationVal / 1000 + " seconds per slide")
renderGallery() // Start Carousel
// Debugging
function updateDuration() {
    clearInterval(galleryTimer) // Stop Carousel
    var duration = document.getElementById('slideTime').value
    durationVal = duration
    console.warn("Updated Slide Duration to " + duration / 1000 + " seconds")
    renderGallery() // Resume Carousel
}
// Core Functions
function renderGallery() { // Central Function (This actually does the main shit)
    galleryTimer = setInterval(() => { // Create timer
        // Progresses Carousel by 1 image, including built in overflow protection
        if (state == (imgList.length - 1)) { state = 1 } else { state = state + 1 }
        // Update Image & Position Indicator
        carousel.setAttribute('src', imgList[state][0])
        updatePosDisplay(state-1)
    }, durationVal) // durationVal is a Variable which controls how long each slide shows for
}
function changePosition(control) { // Control Carousel using the three main control buttons
    clearInterval(galleryTimer)
    state = state + control
    updatePosDisplay(state)
    carousel.setAttribute('src', imgList[state][0])
    console.info("Paused Carousel and Changed Render to " + imgList[state][0] + " Index " + state)
    isPaused = true
}
// Pauses Carousel at user's command
function pauseSlideshow() {
    if (isPaused == false) {
        clearInterval(galleryTimer) // Stops Central Timer
        isPaused = true
        playPause.innerHTML = "play_circle" // Changes the Play/Pause icon to the Play icon
        console.info("Paused Render Carousel")
    } else if (isPaused == true) {
        renderGallery() // Starts the function where it left off
        isPaused = false
        playPause.innerHTML = "pause_circle" // Changes the Play/Pause icon to the Pause icon
        console.info("Resumed Carousel")
    }
    // Icon Identifiers = pause_circle \ play_circle
}
// Sets carousel to position determined by user.
function directPosition(pos) {
    updatePosDisplay(pos)
    // Change Position of the Carousel
    clearInterval(galleryTimer) // Stops central timer
    state = pos
    carousel.setAttribute('src', imgList[state][0])
    renderGallery() // Restart Core function
    console.info("Changed positon to " + state + " " + pos) // Announce change in console logs
}
function updatePosDisplay(pos) {
    // Indicator Display Handler
    let b = 0
    while (b < indicators.length) {
        indicators[b].classList.remove('active')
        b++
    }
    indicators[pos].classList.add('active')
}