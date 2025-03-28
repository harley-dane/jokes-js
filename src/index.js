import getJoke from './api.js';

const dom = {
    jokeContainer: document.querySelector('.container'),
    jokeButton: document.querySelector('.btn'),
    jokeText: document.getElementById('joke-text'),
};

// Import the getJoke function from api.js and use it to fetch a joke
const fetchJoke = async () => {
    const joke = await getJoke();
    if (joke) {
        console.log(joke);
        dom.jokeText.innerText = `${joke.setup} ${joke.delivery}`;
    } else {
        console.log('No joke found');
    }
  
};

dom.jokeButton.addEventListener('click', () => {
    fetchJoke();
});























/*import getJoke from './api.js';

const dom = {
    jokeContainer: document.querySelector('.container'),
    jokeButton: document.querySelector('.btn'),
};

// Import the getJoke function from api.js and use it to fetch a joke
const fetchJoke = async () => {
    const joke = await getJoke();
    if (joke) {
        console.log(joke);
    } else {
        console.log('No joke found');
    }
};

dom.jokeButton.addEventListener('click',() => {
    
    fetchJoke();
    console.log('Button clicked!')
})*/
