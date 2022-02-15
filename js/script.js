const fetchJokes = (n) => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(fetchObj=>fetchObj.json())
    .then(jsonData=>{
        addJokesToDom(jsonData.joke)
        // addUsersToDom(jsonData.results)
        console.log(jsonData.joke)
    })
    .catch(err=>console.log('Error fetching data:', err))
}

const addJokesToDom = (joke) => {
    // clears the previous joke
    document.querySelector('#joke').textContent = ""

    let newJoke = document.createElement('p')
    newJoke.textContent = joke
    document.querySelector('#joke').appendChild(newJoke)

    var img = document.createElement("img");
    img.src = 'https://c.tenor.com/Va9M6DvKygYAAAAC/ba-dum-tsss-drum.gif'
    img.style.width = '200px'
    document.querySelector('#joke').appendChild(img)
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("hello")

    document.querySelector('button').addEventListener('click', e=> {
        e.preventDefault()
        
        fetchJokes()
    })
})