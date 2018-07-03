export const store = {
    movies: [],
    programs: []
}

class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }
    getData() {
        const genreFirstLetter = this.genre.slice(0, 1);
        const genreLastLetter = this.genre.slice(this.genre.length - 1);
        const genreID = (`${genreFirstLetter}${genreLastLetter}`).toUpperCase();
        const movieTitle = `${this.title[0].toUpperCase()}${this.title.slice(1)}`

        const output = `${movieTitle}, ${this.length}min, ${genreID}`;
        return output;
    }
}

class Program {
    constructor(date) {
        const inputDate = new Date(date);
        this.date = `${inputDate.getDate()}.${inputDate.getMonth() + 1}.${inputDate.getFullYear()}`;
        this.movieList = [];
    }
    addMovie(movie) {
        this.movieList.push(movie);
    }

    moviesLength() {
        let moviesLength = 0;
        this.movieList.forEach(function (movie) {
            moviesLength += parseInt(movie.length);
        })
        return moviesLength;
    }

    getInfo() {
        let output = "";
        if (this.movieList.length === 0) {
            output = `${this.date}, program duration: TBA`;
        } else {
            output = `${this.date}, ${this.movieList.length} movies, ${this.moviesLength()} min`;
        }
        return output;
    }
}

export const createMovie = (title, length, genre) => {
    const createdMovie = new Movie(title, length, genre);
    store.movies.push(createdMovie);
    return createdMovie;
}

export const isValid = (title, length, genre) => {
    if (!title || !length || !genre) {

        return false;
    }

    if (length > 250) {
        return false;
    }

    return true;
}

export const calculateMoviesLength = () => {
    let totalLength = 0;
    store.movies.forEach(movie => {
        totalLength += movie.length;
    })
    return totalLength;
}

export const createProgram = (date) => {
    const createdProgram = new Program(date);
    store.programs.push(createdProgram);
    return createdProgram;
}

export const addMovieToProgram = (movieIndex, programIndex) => {
    const chosenMovie = store.movies[movieIndex];
    const chosenProgram = store.programs[programIndex];

    chosenProgram.addMovie(chosenMovie);

    return {
        chosenMovie,
        chosenProgram
    }
}

export const isValidDate = (date) => {
    if (!date) {

        return false;
    }
    return true
}

export const getProgramInfo = (chosenProgram) => {

    return chosenProgram.getInfo()
}


