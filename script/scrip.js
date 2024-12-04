fetch(`https://www.swapi.tech/api/films`)
.then((res) => res.json())
.then((data) => {
  console.log(data);
  let meet = document.getElementById("me")
  let met = document.getElementById("you")
  let work = document.getElementById("we")
  let come = document.getElementById("her")
  let see = document.getElementById("end")
  let look = document.getElementById("him")
  for (let index = 0; index < data.result.length; index++) {
    meet.innerHTML = `film name: ${data.result[0].properties.title}`
    met.innerHTML = `film name: ${data.result[1].properties.title}`
    work.innerHTML = `film name: ${data.result[2].properties.title}`
    come.innerHTML = `film name: ${data.result[3].properties.title}`
    see.innerHTML = `film name: ${data.result[4].properties.title}`
    look.innerHTML = `film name: ${data.result[5].properties.title}`
  }
});