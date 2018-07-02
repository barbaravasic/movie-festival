import * as ui from './ui_module.js';
import * as data from './data_module.js';

const addMovieHandler = () => {
    const collectedData = ui.collectMovieInputs();
    const isValid = data.isValid(collectedData.title, collectedData.length, collectedData.genre);
    if (!isValid) {
        ui.displayError();
        return
    }
    ui.removeError();
    const createdMovie = data.createMovie(collectedData.title, collectedData.length, collectedData.genre);
    ui.displayMovie(createdMovie);
    ui.displayMovieLength(data.calculateMoviesLength());
    ui.clearMovieInputs();
    ui.displayMovieOptions(data.store.movies)
}

const addProgramHandler = () => {
    const collectedProgramInputs = ui.collectProgramInputs();
    const isValidDate = data.isValidDate(collectedProgramInputs.date);
    if (!isValidDate) {
        ui.displayProgramInputError();
        return
    }
    ui.removeProgramError();
    const createdProgram = data.createProgram(collectedProgramInputs.date);
    ui.displayProgram(createdProgram);
    ui.clearProgramInputs();
    ui.displayProgramOptions(data.store.programs);
}

const addToProgramHandler = () => {
    const { chosenMovieIndex, chosenProgramIndex } = ui.selectChosenOptions();
    const { chosenMovie, chosenProgram } = data.addMovieToProgram(chosenMovieIndex, chosenProgramIndex);
    const chosenProgramInfo = data.getProgramInfo(chosenProgram);
    ui.displayProgramInfo(chosenProgramInfo)
}

export const init = () => {
    const addMovieBtn = document.querySelector("#button-movie");
    addMovieBtn.addEventListener("click", addMovieHandler);
    const btnProgram = document.querySelector("#button-program");
    btnProgram.addEventListener("click", addProgramHandler);
    const btnAddMovie = document.querySelector("#add-movie-button");
    btnAddMovie.addEventListener("click", addToProgramHandler);
}