// Update Organizer Image 
const inputFile = document.querySelector('#image')
const updateBtn = document.querySelector('#update-btn')
inputFile.addEventListener('change', function(e){
    if(this.value){
        updateBtn.disabled = false
    }
})

