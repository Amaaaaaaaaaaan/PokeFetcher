

async function pokeFetcher(){
    try{
        const errorDisplayer=document.getElementById('errorText')
const mybtn=document.getElementById('mybtn');
const pokemon_name=document.getElementById('textfield').value.toLowerCase();     
var img=document.getElementById('pokeImg')
let pokename=document.getElementById('name')
let pokeweight=document.getElementById('weight')
let poketype=document.getElementById('type')

const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
if (!response.ok) {
    throw new Error("Pokémon Not Found");
}
errorDisplayer.style.display="none"

const data = await response.json();

const imgSrc=data.sprites.front_default;

img.src=imgSrc;
img.style.display="block"
img.style.border="1px solid black"

pokename.textContent = `Name:  ${data.name}`;
pokeweight.textContent = `Weight: ${data.weight}`; 

// Handling types - data.types is an array
if (data.types.length > 0) {
    poketype.textContent = `Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
} else {
    poketype.textContent = "Type: Unknown";
}



}catch(error){
    console.log(error)
    const errorDisplayer=document.getElementById('errorText')
    
    errorDisplayer.style.display="block"
     img.style.display="none"
 errorDisplayer.textContent="Pokemon Not found ERROR 404"
}

}


mybtn.addEventListener('click',pokeFetcher)
document.addEventListener('keyup',event=>{
    if(event.key=='Enter'){
        pokeFetcher();
    }
})

