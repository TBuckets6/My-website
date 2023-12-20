//This code is for the seam carving dialog box.

const seamCarverImg = document.getElementById('seamCarverImg')
const closeModal = document.getElementById('closeModal')
const modal = document.getElementById('modalId')

seamCarverImg.addEventListener('click', () => {
    modal.showModal()
    modal.scrollTop = 0
})

closeModal.addEventListener('click', () => {
    modal.close()
})