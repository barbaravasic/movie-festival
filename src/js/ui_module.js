const selectMovieInputs = () => {
    const titleInput = document.querySelector("#title");
    const lengthInput = document.querySelector("#length");
    const genreInput = document.querySelector("#genre");
    var dateInput = document.querySelector("#date");

    return {
        titleInput,
        lengthInput,
        genreInput
    }
}

export const collectMovieInputs = () => {
    const { titleInput, lengthInput, genreInput } = selectMovieInputs();

    const title = titleInput.value;
    const length = parseInt(lengthInput.value);
    const genre = genreInput.value;

    return {
        title,
        length,
        genre
    }
}

export const displayError = () => {
    const createMovieValidOutput = document.querySelector(".first p");
    createMovieValidOutput.textContent = "All fields required!";
    createMovieValidOutput.classList.remove("hide");
    createMovieValidOutput.classList.add("validation");
}

export const removeError = () => {
    const createMovieValidOutput = document.querySelector(".first p");
    createMovieValidOutput.classList.add("hide")
    
}

export const displayMovie = (movie) => {
    const movieListUl = document.querySelector("#movie-list");
    const movieListItem = document.createElement("li");
    movieListItem.textContent = movie.getData();
    movieListUl.appendChild(movieListItem);

}

export const displayMovieLength = (totalLength) => {
    const totalLengthDiv = document.querySelector("#total-length");
    totalLengthDiv.textContent = totalLength;
}

export const clearMovieInputs = () => {
    const { titleInput, lengthInput, genreInput } = selectMovieInputs();

    titleInput.value = "";
    lengthInput.value = "";
    genreInput.value = "";
}

const selectProgramInputs = () => {
    const dateInput = document.querySelector("#date");

    return {
        dateInput
    }
}

export const collectProgramInputs = () => {
    const { dateInput } = selectProgramInputs();

    const date = dateInput.value;

    return {
        date
    }
}

export const displayProgram = (program) => {
    const programInfoUl = document.querySelector("#program-info");
    const programListItem = document.createElement("li");
    programListItem.textContent = program.getInfo();
    programInfoUl.appendChild(programListItem);
}

export const clearProgramInputs = () => {
    const { dateInput } = selectProgramInputs();

    dateInput.value = "";
}

export const displayProgramInputError = () => {
    const createProgramValidOutput = document.querySelector(".second p");
    createProgramValidOutput.textContent = "Please choose date!";
    createProgramValidOutput.classList.remove("hide");    
    createProgramValidOutput.classList.add("validation");
}

export const removeProgramError = () => {
    const createProgramValidOutput = document.querySelector(".second p");
    createProgramValidOutput.classList.add("hide")
    
}

export const displayMovieOptions = (movieList) => {
    const optionMovie = document.createElement("option");
    const chooseMovieInput = document.querySelector("#choose-movie");

    for (let i = 0; i < movieList.length; i++) {
        optionMovie.textContent = movieList[i].title;
        optionMovie.value = i;
        chooseMovieInput.appendChild(optionMovie);
    }
}

export const displayProgramOptions = (programList) => {
    const optionProgram = document.createElement("option");
    const chooseProgramInput = document.querySelector("#choose-program");

    for (let i = 0; i < programList.length; i++) {
        optionProgram.textContent = programList[i].date;
        optionProgram.value = i;
        chooseProgramInput.appendChild(optionProgram);
    }
}

export const selectChosenOptions = () => {
    const chosenMovieIndex = document.querySelector("#choose-movie").value;
    const chosenProgramIndex = document.querySelector("#choose-program").value;

    return {
        chosenMovieIndex,
        chosenProgramIndex
    }
}

export const displayProgramInfo = (programInfo) => {
    const allProgramInfo = document.querySelectorAll("#program-info li");

    allProgramInfo.forEach(program => {
        const programDate = program.textContent.split(",");
        if (programDate[0] === programInfo.split(",")[0]) {
           
            program.textContent = programInfo;      
        }
    })
}