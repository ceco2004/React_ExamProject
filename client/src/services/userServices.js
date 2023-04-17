import * as url from '../constans/url';



export async function login(userData){

    const response = await fetch(url.loginUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();
    return result;
}



export async function register(userData){
    const response = await fetch(url.registerUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();
    return result;
}


export async function logout(accessToken){

    const response = await fetch(url.logOutUrl, {
        headers:{
            "X-Authorization": accessToken
        }
    });

    //const result = await response.json();
    //return result;

    // must be statusCode 204
    // console.log("Status: " + response.status); 
    // console.log("OK: " + response.ok);
}