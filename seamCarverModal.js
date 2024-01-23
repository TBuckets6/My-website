//This code is for the seam carving dialog box.

const seamCarverImg = document.getElementById('seamCarverImg')
const weatherImg = document.getElementById('weatherImg')

const closeSeamModal = document.getElementById('close-seam-modal')
const closeWeatherModal = document.getElementById('close-weather-modal')

const seamModal = document.getElementById('seamcarver-modal')//modal
const weatherModal = document.getElementById('weather-modal')

seamCarverImg.addEventListener('click', () => {
    seamModal.showModal()
    seamModal.scrollTop = 0
})

closeSeamModal.addEventListener('click', () => {
    seamModal.close()
})

weatherImg.addEventListener('click', () => {
    weatherModal.showModal()
    weatherModal.scrollTop = 0
})

closeWeatherModal.addEventListener('click', () => {
    weatherModal.close()
})