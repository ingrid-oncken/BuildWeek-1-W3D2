window.onload = function () {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
    .then((response) => response.json())
    .then((data) => {
      console.log("resolved")
      console.log(data)
      //resolve
    })
    .catch((err) => {
      //reject
      console.log("rejected")
      console.error(err)
    })
}
