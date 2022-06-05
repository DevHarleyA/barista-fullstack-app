//Order Form Actions

const coffee = document.getElementsByClassName('coffee')
const size = document.getElementsByClassName('size')
const temp = document.getElementsByClassName('temp')
const cream = document.getElementsByClassName('cream')
const flavor = document.getElementsByClassName('flavor')

Array.from(coffee).forEach(function (element){
  element.addEventListener('click', function() {
    console.log(element.value)
    document.querySelector('.coffeeOrder').value = element.value
  })
})

Array.from(size).forEach(function (element){
  element.addEventListener('click', function() {
    console.log(element.value)
    document.querySelector('.coffeeSize').value = element.value
  })
})

Array.from(temp).forEach(function (element){
  element.addEventListener('click', function() {
    console.log(element.value)
    document.querySelector('.coffeeTemp').value = element.value
  })
})

Array.from(cream).forEach(function (element){
  element.addEventListener('click', function() {
    console.log(element.value)
    document.querySelector('.coffeeCream').value = element.value
  })
})

Array.from(flavor).forEach(function (element){
  element.addEventListener('click', function() {
    console.log(element.value)
    document.querySelector('.coffeeFlavor').value = element.value
  })
})

// Barista Profile Actions
const complete = document.getElementsByClassName("fa-circle-check")
const remove = document.getElementsByClassName("fa-ban");

Array.from(complete).forEach(function (element) {
    element.addEventListener('click', function () {
        const _id = this.parentNode.parentNode.id
        const barista = this.parentNode.parentNode.parentNode.children[1].innerText
        console.log(_id, barista)
      fetch('orderComplete', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          '_id': _id,
          'barista': barista
        })
      })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
//           const readyOrder = document.querySelector('.sayMe').innerText
// let announcement = new SpeechSynthesisUtterancce(readyOrder)
// window.speechSynthesis
// .speak(announcement)
        })
    })
  })  

Array.from(remove).forEach(function(element) {
  element.addEventListener('click', function(){
    const _id = this.parentNode.parentNode.id
    console.log(_id)

    fetch('orderDelete', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        '_id': _id
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});


