export async function search(e){
    e.preventDefault()    // prevents default when charging the page

    const content = document.querySelector('.content');

    var searchbar = document.querySelector('#search')
    var search = searchbar.value
 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e5040345367f59d1754a978762675629&units=metric`,  {mode: 'cors' // cors mode for security pass, fetching the json API URL with a f(format) string search inside for the city
})

const result = await response.json(); // the reponse

content.innerHTML = `Temperature in ${search} : ${result.main.temp}°C`

if (result.main.temp < 15) // if temp is cold, we display a grey background and erase the sun
{
    document.body.style.backgroundColor = "lightgrey"
    var sun = document.querySelector('.sun')
    sun.classList.remove('sun')
    sun.classList.add('bad')
    

    
}
else {

    document.body.style.backgroundColor = "#00b4ff" // if hot, we display the default back
    var sun = document.querySelector('.bad')
    sun.classList.add('sun')
    sun.classList.remove('bad')
  

   

    
}
    
console.log("hello")
}

