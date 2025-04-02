import getJoke from '../api.js';

const dom = {
    container: document.getElementById('container'),
    btn: document.getElementById('get-joke'),
    joke: null,
    category: null,
    tags: null
}
 

const createTags = (tags) => {
    const currentTags = Object.values(tags).some(tag => tag);
    if (!currentTags) {
        if (dom.tags) {
            dom.tags.innerHTML = '';
        }
        return;
    }
    const filtered = Object.keys(tags).filter(flag => tags[flag]);

    if (!dom.tags) {
        dom.tags = document.createElement('div');
        dom.tags.setAttribute('id', 'tags');
        dom.container.append(dom.tags);
    }

    dom.tags.innerHTML = '';

    filtered.forEach(tag => {
        const tagBox = document.createElement('span');
        tagBox.innerText = tag;
        tagBox.setAttribute('id', 'joke');
        dom.tags.append(tagBox);
    })
}

const createCategory = (category) => {
    if (!dom.category) {
        dom.category = document.createElement('div');
        dom.container.append(dom.category);
        dom.category.setAttribute('id', 'category');
    }

    dom.category.innerText = 'Category: ' + category;
}

const joke = async () => {
    const response = await getJoke();
    createCategory(response.category);
    createTags(response.flags);
    let jokeText = '';
    if (response.joke) {
        jokeText += `${response.joke}`;
    } else {
        jokeText += `${response.setup}\n\n${response.delivery}`;
    }

    if (!dom.joke) {
        dom.joke = document.createElement('div');
        dom.container.append(dom.joke);
        dom.joke.setAttribute('id', 'joke');
    }

    dom.joke.innerText = jokeText;
}

dom.btn.addEventListener('click', joke);