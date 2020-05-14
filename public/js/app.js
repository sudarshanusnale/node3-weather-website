console.log('This is from client side java script file')

/*
fetch('http://localhost:3000/weather?address=latur').then((response) => {
    response.json().then((data)=>{
       // console.log(data)
       if(data.error){
           console.log(data.error)
       }else{
           console.log(data.location)
           console.log(data.forecast)
       }
    })
})

*/

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    
    messageOne.textContent = 'Loading...'
    messageOne.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data)=>{
       // console.log(data)
       if(data.error){
           messageOne.textContent = data.error
       }else{
           messageOne.textContent = data.location
           messageTwo.textContent = data.forecast

       }
     })
  })
   
})