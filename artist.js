let ids = ["412","402" ,"404" ,"406"]


window.onload= () =>{
 displayAlbums(ids)
}

let urlParams = new URLSearchParams(window.location.search)
const myArray = []
const displayAlbums = (queries)=>{
const page = document.querySelector(".artist-cards")
 queries.forEach( query => {
                    
fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/"+ query)
.then(response => response.json())
.then(artist => {
    // console.log(artist)
   
   
let card = (
    `<div
    class="col-6 col-md-4 col-lg-2 px-1 py-0 artist-anim w-50 h-20"
    id="card-col" 
    >
    <div class="card text-white thursday">
        <img
        class="card-img shadow image-fluid w-100"
        src="${artist.picture}"
        alt="Card image"
        />
        <div class="overlay"></div>
        <div class="card-img">
        <p class="card-p mt-1">
            ${artist.title}<br /><span
            >${artist.name}</span
            >
        </p>
        </div>
    </div>
    <div class="newClass">
        <a
        href="#"
        class="rent-badge badge"
        style="background: none"
        id="playbtn"
        ><img src="images/play.png" style="background: none"
        /></a>
    </div>
    </div>
                `
)

page.innerHTML += card
})
 })
}