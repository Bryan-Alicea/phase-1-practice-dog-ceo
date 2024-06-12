function init(){

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.querySelector('#dog-image-container')
    fetch(imgUrl)
    .then(response => {
        return response.json()
    })
    .then(data => {
        //console.log(data)
        data.message.forEach(element => {
            let imgTag = document.createElement('img')
            imgTag.src = element
            imageContainer.appendChild(imgTag)
        });
    })
    .catch(error => {
        console.log(error.message)
    })


    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsContainer = document.querySelector('#dog-breeds')
    
    fetch(breedUrl)
    .then(response => {
        return response.json()
    })
    .then(data => {
        //console.log(data)
        for(element in data.message){
            let liTag = document.createElement('li')
            liTag.id = element
            liTag.innerHTML = element
            dogBreedsContainer.appendChild(liTag)
        }
    })
    .catch(error => {
        console.log(error.message)
    })


    dogBreedsContainer.addEventListener('click', function(event){
        event.target.style.backgroundColor = 'orange'
        
    })

    console.log(dogBreedsContainer)
    

    const dropDownOptions = document.querySelector('#breed-dropdown')
    const allDropDownOptions = dropDownOptions.options 
    //console.log(allDropDownOptions)

    dropDownOptions.addEventListener('click', function(option){
        
    })
}


document.addEventListener('DOMContentLoaded', init)