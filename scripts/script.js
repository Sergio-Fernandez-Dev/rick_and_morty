window.onload = function() {
    const prevButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');

    var characterId = 0;
    let totalNumOfChars = 826;
    

    nextButton.onclick = function () {
        if (characterId < totalNumOfChars) {
            characterId++;
        } else {
            characterId = 1; 
        }
        getCharacter(characterId);
    }

    prevButton.onclick = function () {
        if (characterId > 1) {
            characterId--;  
        } else {
            characterId = totalNumOfChars;
        }
        getCharacter(characterId);
    }
}

function getCharacter(id) {
    const URL = "https://rickandmortyapi.com/api/character/" + id;
    const request = new XMLHttpRequest()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status === 200){
                var result = request.responseText
                var resultJSON = JSON.parse(result)
                setProfile(resultJSON);
                console.log
            }
        }
    }
    request.open("GET",URL)
    request.send()
}

function setProfile(data) {
    const name = data.name;
    const specie = data.species;
    const gender = data.gender;
    const image = data.image;

    document.getElementById('name').innerHTML = name; 
    document.getElementById('specie').innerHTML = specie; 
    document.getElementById('gender').innerHTML = gender; 
    document.getElementById('profile-photo').src = image;
} 