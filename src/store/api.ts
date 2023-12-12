import {API_KEY, BASE_URL} from "../utils/api-utils";



export const fetchGif = (id:string)  => {
    return fetch(`${BASE_URL}/${id}?${API_KEY}`)
        .then(response => response.json());
};

export const fetchTrendingGifs = (limit:string)  => {
    return fetch(`${BASE_URL}/trending?${API_KEY}&limit=${limit}&rating=g`)
        .then(response => response.json());
};

export const fetchCategories = () => {
    return fetch(`${BASE_URL}/categories?${API_KEY}&limit=5`)
        .then(response => response.json());
};
export const fetchArtists = (limit:string, query:string) => {
    return fetch(`${BASE_URL}/search?${API_KEY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`)
        .then(response => response.json());
};

export const fetchCategoryGifs = (limit:string, category:string) => {
    return fetch(`${BASE_URL}/search?${API_KEY}&q=${category.toLowerCase()}&limit=${limit}&offset=0&rating=g&lang=en`)
        .then(response => response.json());
};

export const fetchSearchedGifs = (limit:string, query:string) => {
    return fetch(`${BASE_URL}/search?${API_KEY}&q=${query.toLowerCase()}&limit=${limit}&offset=0&rating=g&lang=en`)
        .then(response => response.json());
};