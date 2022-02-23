console.log('hello weather')


const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    message1.textContent='loading...'
    fetch('/weather?address='+ search.value).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                message1.textContent= data.error
                return console.log(data.error)

            }
            message1.textContent='weather infos'
            console.log(data)
            console.log('la temperature dans '+ data.place+ ' est ' + data.temperature)
            message2.textContent = 'la temperature dans '+ data.place+ ' est ' + data.temperature
        })
    })
})