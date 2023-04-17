import * as url from '../constans/url';



export async function Login(userData){

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

export async function Register(userData){
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


export async function Logout(accessToken){
    const response = await fetch(url.logOutUrl, {
        headers:{
            "X-Authorization": accessToken
        }
    });

    // must be statusCode 204
    console.log("Status: " + response.status); 
    console.log("OK: " + response.ok);
}