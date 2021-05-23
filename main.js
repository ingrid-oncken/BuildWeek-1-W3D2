// // HEART TOGGLE FUNCTIONS

// window.onload = function () {
//   fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "c1fd8eb80bmsh31fad838004364fp18f820jsn1e2bc6355511",
//       "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//     },
//   })
//     .then((response) => response.json())
//     .then((jsondata) => console.log(jsondata))

//     .catch((err) => {
//       console.error(err);
//     });
// };

const albumContainer = document.getElementById("albums")
const card = document.querySelectorAll(".myAlbum")
window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
    .then((response) => response.json())
    .then((artist) => {
      console.log(artist.data)
      let albums = artist.data
      albums.forEach((album) => {
        albumContainer.innerHTML += `<div
            class="myAlbum col-6 col-md-4 col-lg-2 px-1 py-0 artist-anim w-50 h-20"
            id="card-col"
          >
            <div class="card text-white thursday">
              <img
                class="card-img shadow image-fluid w-100"
                src="${album.album.cover_big}"
                alt="Card image"
              />
              <div class="overlay"></div>
              <div class="card-img">
                <p class="card-p mt-1">${album.title}<br /><span>Queen</span></p>
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
          </div>`
      })
    })
    .catch((err) => console.log(err))
  card.addEventListener("click", () => renderAlbum())
}
function renderAlbum(e) {
  const currentId = e.target.albums.album.id
  console.log(currentId)
}