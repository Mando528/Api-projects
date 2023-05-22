let searchResult = document.querySelector("#searchResult");
let searchBtn = document.querySelector("#search");
let notFound = document.querySelector(".notFound");
let notFoundText = document.querySelector("#notFoundText");
let movieInfo = document.querySelector(".main-info");
let secondaryInfo = document.querySelector(".movie-info .secondary-info");
let movieImg = document.querySelector(".main-info img");
let movieName = document.querySelector(".movie-name");
let rateNumber = document.querySelector(".rate-number");
let rated = document.querySelector(".rated");
let releaseDate = document.querySelector(".release-date");
let runTime = document.querySelector(".run-time");
let genres = document.querySelector(".genres");
let plot = document.querySelector(".plot-paragraph");
let cast = document.querySelector(".cast-paragraph");


let key="8030d2e3";
searchBtn.addEventListener("click",()=>{
    let searchedName = searchResult.value;
    let url = `http://www.omdbapi.com/?t=${searchedName}&apikey=${key}`;

    //if the input is empty
    if(searchedName.length <= 0){
        notFoundText.innerHTML="Please enter a movie name";
    }

    //if the input is not empty
    else{
        fetch(url).then((resp) => resp.json()).then((data) =>{
            
            //if the name u entered exists
            if(data.Response==="True"){
                notFound.style.display = "none";
                movieInfo.style.display = "flex";
                secondaryInfo.style.display="flex"
                movieImg.src=data.Poster;
                movieName.innerHTML = data.Title;
                rateNumber.innerHTML = data.imdbRating;
                rated.innerHTML = data.Rated;
                releaseDate.innerHTML = data.Year;
                runTime.innerHTML = data.Runtime;
                genres.innerHTML =`<div>${data.Genre.split(",").join("</div><div>")}</div>`; //bnt elws5a de hya ely 3mlt 2l2
                plot.innerHTML = data.Plot;
                cast.innerHTML = data.Actors;
            }
            //if the name u entered does not exist
            else{
                notFound.style.display = "block";
                notFoundText.innerHTML="Movie not found!";
                movieInfo.style.display = "none";
                secondaryInfo.style.display="none";
            }
        })
        
    }
})




