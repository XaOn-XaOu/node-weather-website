const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messaggeOne = document.querySelector('#message-1')
const messaggeTwo = document.querySelector('#message-2')

// messaggeOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messaggeOne.textContent = 'Loading...'
    messaggeTwo.textContent = ''

    fetch('/weather?address=' + location).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                messaggeOne.textContent = data.error
            } else {
                messaggeOne.textContent = data.location
                messaggeTwo.textContent = data.forecast
            }
        })
    })
})