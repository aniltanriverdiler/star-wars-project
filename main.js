const charactersData = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

console.log(characters);

const homeworldsRaw = characters.map(
  (homeworlds) => homeworlds.homeworld ?? "other"
);
console.log(homeworldsRaw);

const homeworldsUnique = [...new Set(homeworldsRaw)];
console.log(homeworldsUnique);

const homeworldsLowercase = homeworldsUnique.map((homeworld) =>
  homeworld.toLowerCase()
);
console.log(homeworldsLowercase);

const homeworlds = homeworldsLowercase;
console.log(homeworlds);

const cardContainer = document.getElementById("cardContainer");
const toggleBtn = document.getElementById("toggleBtn");

console.log(cardContainer);

function renderCharacters(charactersToRender = characters) {
  console.log(
    "renderCharacters function ran, incoming characters:",
    charactersToRender
  );
  console.log(
    "Number of characters to be displayed on the screen:",
    charactersToRender.length
  );

  cardContainer.innerHTML = "";

  const homeworld = characters.map(character => character.homeworld ? character.homeworld : "other");
  console.log(homeworld);

  const inputContainer = document.getElementById("inputContainer");

  renderInput.forEach((homeworld) => {
    inputContainer.innerHTML += `
    <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="${homeworld}" id="${homeworld}" value="${homeworld}">
  <label class="form-check-label" for="${homeworld}">
    other
  </label>
  </div>
  </div>
    `
  })
  
  /* const inputFields = `
  <div id="homeworlds-filter-container" class="d-flex flex-row mb-3 justify-content-center gap-4">
  
  <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-tatooine" value="tatooine">
  <label class="form-check-label" for="homeworld-tatooine">
   tatooine
  </label>
  </div>
  </div>

  <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-naboo" value="naboo">
  <label class="form-check-label" for="homeworld-naboo">
    naboo
  </label>
  </div>
  </div>

  <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-alderaan" value="alderaan">
  <label class="form-check-label" for="homeworld-alderaan">
    alderaan
  </label>
  </div>
  </div>

  <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-stewjon" value="stewjon">
  <label class="form-check-label" for="homeworld-stewjon">
    stewjon
  </label>
  </div>
  </div>

  <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-eriadu" value="eriadu">
  <label class="form-check-label" for="homeworld-eriadu">
    eriadu
  </label>
  </div>
  </div>

  <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-kashyyyk" value="kashyyyk">
  <label class="form-check-label" for="homeworld-kashyyyk">
    kashyyyk
  </label>
  </div>
  </div>

  <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-corellia" value="corellia">
  <label class="form-check-label" for="homeworld-corellia">
    corellia
  </label>
  </div>
  </div>

  <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-rodia" value="rodia">
  <label class="form-check-label" for="homeworld-rodia">
    rodia
  </label>
  </div>
  </div>

  <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-bestine" value="bestine">
  <label class="form-check-label" for="homeworld-bestine">
    bestine
  </label>
  </div>
  </div>

  <div class="d-flex">
  <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-other" value="other">
  <label class="form-check-label" for="homeworld-other">
    other
  </label>
  </div>
  </div>

  </div>
  `; */

  cardContainer.innerHTML += inputFields;

  characters.forEach((character, index) => {
    const cardTemplate = `
                <div class="col">
                    <div class="card">
                        <img src="${character.pic}" class="card-img-top" alt="${character.name}">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p id="desc-${index}" class="card-text">${character.homeworld}</p>
                        </div>
                    </div>
                </div>
            `;
    cardContainer.innerHTML += cardTemplate;
  });

  addFilterEventListener();
  console.log("filteredCharacter");
  console.log("Rendered characters:", characters);
}

function filterCharacter() {
  const selectedRadio = document.querySelector(
    'input[name="homeworld"]:checked'
  );

  if (!selectedRadio) {
    console.log("Please make a selection!");
    renderCharacters();
    return;
  }

  const selectedHomeworld = selectedRadio.value;
  console.log("Selected homeworld: ", selectedHomeworld);

  const filteredHomeworld = characters.filter(
    (character) =>
      (character.homeworld ?? "other").toLowerCase() === selectedHomeworld
  );

  console.log("Filtered Characters: ", filteredHomeworld);
  renderCharacters(filteredHomeworld);

  cardContainer.style.display = "flex";
}

function addFilterEventListener() {
  const filterContainer = document.getElementById(
    "homeworlds-filter-container"
  );

  if (filterContainer) {
    filterContainer.addEventListener("change", filterCharacter);
    console.log("Filter event listener added!");
  } else {
    console.log("Filter container not found!");
  }
}

renderCharacters();
addFilterEventListener();

function toggleCharacters() {
  if (
    cardContainer.style.display === "none" ||
    cardContainer.style.display === ""
  ) {
    cardContainer.style.display = "flex";
    renderCharacters();
    toggleBtn.innerHTML = "Hide Characters";
  } else {
    cardContainer.style.display = "none";
    toggleBtn.innerHTML = "Show Characters";
  }
}