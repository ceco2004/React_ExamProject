import * as url from '../constans/url';



export async function update(animalData, accessToken){
    const response = await fetch(`${url.animalBaseUrl}/${animalData._id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "X-Authorization": accessToken
        },
        body: JSON.stringify(animalData)
    })

    const result = await response.json();

    return result;
}



export async function getAll(){
    const response = await fetch(url.animalBaseUrl);
    const animals = await response.json();

    return animals;
}



export async function getOne(animalId){
    const response = await fetch(`${url.animalBaseUrl}/${animalId}`);
    const animal = await response.json();
    return animal;
}



export async function createAnimal(animalData, accessToken){
    
    const response = await fetch(url.animalBaseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization": accessToken
        },
        body: JSON.stringify(animalData)
    });

    const result = await response.json();
    
    return result;
    
} 