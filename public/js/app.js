// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data)
//   })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.getElementById('msg1')
const message2 = document.getElementById('msg2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value

  message1.textContent = 'Loading...'
  message2.textContent = ''
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        message1.textContent = data.error
      } else {
        message1.textContent = data.location
        message2.textContent = data.forecast
      }
    })
  })
})