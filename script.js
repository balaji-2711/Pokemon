//to fetch the pokemon api
let pokemon = async () => {
  try {
    let api = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50";

    let res = await fetch(api, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await res.json();

    //to get the details of pokemon
    for (let i = 0; i < data.results.length; i++) {
      let k = data.results[i].url;
      let res1 = await fetch(k, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      let data1 = await res1.json();

      let name = data1.name;
      let abilities = data1.abilities[0].ability.name;
      let moves = data1.moves[0].move.name;
      let weight = data1.weight;

      //to get the image of pokemon from the api
      let image = data1.sprites.other.dream_world.front_default;

      let content = `<div class="card" style="width: 15rem; height:28em; border:2px solid black">
      <img src="${image}" class="card-img-top" alt="..." style="height:15em; padding:5px;">
      <div class="card-body" style="height:15em" >
        <h5 class="card-title"><b>${"Name: " + name}</b></h5>
        <h5 class="card-title"><b>${"Weight: " + weight}</b></h5>
        <h5 class="card-title"><b>${"Moves: " + moves}</b></h5>
        <h5 class="card-title"><b>${"Abilities: " + abilities}</b></h5>
  
      </div>
    </div>`;
      //to append the content inside the container
      let poke_display = document.querySelector(".container-lg");
      let display = document.createElement("div");
      display.innerHTML = content;
      poke_display.append(display);
    }
  } catch (err) {
    console.log(err);
  }
};

pokemon();
