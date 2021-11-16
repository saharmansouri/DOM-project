// const moviesInfo = [
//     {
//         title: 'Average',
//         description: '',
//
//     }
// ]
//
// function Movie(image, title, duration, description) {
//     return {
//         image,
//         title,
//         duration,
//         description,
//     };
// }
// function newCard(obj){
//     return `<div class="movie-card">
// <img class="movie-banner" src=${obj.image}/>
// <h3 class="movie-title">${obj.title}</h3>
// <h4 class="movie-duration">${obj.duration}</h4>
// <p class="movie-description">${obj.description}</p>
// </div>`
// }
//
// const album = document.getElementsByClassName('movies');
//
// function addElement(obj){
//     const newDiv=document.createElement("div");
//     newDiv.innerHTML=`${newCard(obj)}`;
//     album.appendChild(newDiv);
// }
// const moviesInfo = [];
//
// moviesInfo.push(Movie('images/avengers.jpg', 'Avengers: Endgame', '3HR 2MIN',
//     'The Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'));
// moviesInfo.push(Movie('images/hobbs-and-shaw.jpg', 'Hobbs & shaw', '2HR 17MIN',
//     'Hobbs & Shaw is a 2019 American action film directed by David Leitch and written by Chris Morgan.'));
// moviesInfo.push(Movie('images/John-Wick-3-1.jpg', 'John Wick 3', '2HR 34MIN',
//     'John Wick is an American neo-noir action-thriller media franchise created by screenwriter Derek Kolstad.'));
// moviesInfo.push(Movie('images/deadpool-2-1.jpg', 'Deadpool 2', '2HR 7MIN',
//     'Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers.'));
// moviesInfo.push(Movie('images/TheLionKing.jpg', 'The lion King', '3HR 2MIN min',
//     'As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar.'));
// moviesInfo.push(Movie('images/mad-max.jpg', 'Mad Max: Fury Road', '3HR 34MIN',
//     'Mad Max: Fury Road is a 2015 Australian post-apocalyptic action film co-written, co-produced, and directed by George Miller.'));
// moviesInfo.push(Movie('images/aquaman.jpg', 'Aquaman', '120 min',
//     'Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures.'));
// moviesInfo.push(Movie('images/mission-impossible.jpg', 'Mission Impossible', '120 min',
//     'Mission Impossible is a series of American action spy films based on the television series created by Bruce Geller.'));
// moviesInfo.push(Movie('(images/hobbs-and-shaw.jpg)',sahar,'180min','very good.'));
//
// for (let i=0;i<Movie.length;i++){
//     addElement(Movie[i])
// }

function movieObject(title,src,hour,min,date,imbd){
    return{
        title,
        src,
        hour,
        min,
        date,
        imbd,
        get time(){
            return`${this.hour}HR ${this.min}MIN`
        }
    }
}
let  movieList=[]

let avengers=movieObject('avengers','images/avengers.jpg','2','40','sun 8 sep- 6:30pm','7.1')
movieList.push(avengers)

let hobbs=movieObject('Hobbs & show','images/hobbs-and-shaw.jpg','2','13','sun 8 sep- 6:30pm','9.7')
movieList.push(hobbs)

let johnWick=movieObject('john wick 3','images/John-Wick-3-1.jpg','3','13','sun 8 sep- 6:30pm',9.7)
movieList.push(johnWick)

let DeadPool=movieObject('Dead pool 2','images/deadpool-2.jpg','2','30','sun 8 sep- 6:30pm',8.1)
movieList.push(DeadPool)

let LionKing=movieObject('the lion king','images/the-lion-king.jpg','2','13','sun 8 sep- 6:30pm',9.7)
movieList.push(LionKing)

let madMax=movieObject('mad max: fury road','images/mad-max.jpg','2','13','sun 8 sep- 6:30pm',9.7)
movieList.push(madMax)

let Aquaman=movieObject('Aquaman','images/aquaman.jpg','2','13','sun 8 sep- 6:30pm',9.7)
movieList.push(Aquaman)

let Mission=movieObject('Mission Impossible','images/mission-impossible.jpg','2','13','sun 8 sep- 6:30pm',9.7)
movieList.push(Mission)

function CreateMovieCard(obj){
    return `
    <div class="movie-card">
    <img src=${obj['src']}/>
    <p class="title">${obj['title']}</p>
    <p class="imbd-left"><span>${obj['imbd']} </span>/10</p>
    <p class="update">last update</p>
    <p class="update-info left">release Time</p>
    <p class="date">${obj['date']}</p>
    <p class="time-left">${obj['time']}</p>
    </div>
    `
}

function movieHtmls(arr){
    return arr.map(movie=>{
        return CreateMovieCard(movie)
    }).join('')
}
let movieContainer=document.getElementById('movie-container')
movieContainer.innerHTML=movieHtmls(movieList)


//search function //

function onSearch(element){
    let searchTerm=element.value;
    let movieFilter=movieList.filter(movie=>{
        return (movie.title.includes(searchTerm))

    })
    movieContainer.innerHTML=movieHtmls(movieFilter)
}