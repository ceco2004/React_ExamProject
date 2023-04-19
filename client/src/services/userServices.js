import * as url from '../constans/url';



export async function login(userData) {

    try {

        const response = await fetch(url.loginUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (response.status === 403) {
            return {
                error: null,
                message: "Username and/or password are wrong"
            }
        } else {
            const result = await response.json();
            return result;
        }


    } catch (e) {
        return {
            error: e
        }
    }
}



export async function register(userData) {
    try {
        const response = await fetch(url.registerUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const result = await response.json();
        return result;
    } catch (e) {
        return {
            error: e
        }
    }
}


export async function logout(accessToken) {

    const response = await fetch(url.logOutUrl, {
        headers: {
            "X-Authorization": accessToken
        }
    });

    //const result = await response.json();
    //return result;

    // must be statusCode 204
    // console.log("Status: " + response.status); 
    // console.log("OK: " + response.ok);
}