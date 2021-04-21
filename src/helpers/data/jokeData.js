import axios from 'axios';

const baseURL = 'https://official-joke-api.appspot.com/jokes/programming/random';

const getJokes = () => new Promise((resolve, reject) => {
  axios.get(baseURL)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getJokes;
