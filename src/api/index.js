const baseUrl = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT'
export const getPosts = async () => {
    const url = `${baseUrl}/posts`;
    const response = await fetch(url)
    const json = await response.json()
    // need to dig into data to extract posts   
    return json;
} 
export const testAuthentication = async () => {
    // URL that we're gonna reach out to
    const url = `${baseUrl}/test/me`;
    const token = localStorage.getItem("token")
    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    //console.log(json)
    return json;
};
export const registerUser = async (userObject) => {
    // URL that we're gonna reach out to
   try {
        const url = `${baseUrl}/users/register`;
    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
    });   
    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    // TOKEN : json.data.token
   const token = json.data.token
   //console.log(token)
   localStorage.setItem("token", token)
    return json;
   } catch (error) {
       console.error(error)
   }
}; 
export const loginUser = async (userObject) => {
    // URL that we're gonna reach out to
   try {
        const url = `${baseUrl}/users/login`;
    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
    });   
    // Take the body we got back and convert it to JS Object
    const json = await response.json();    
    // TOKEN : json.data.token
   const token = json.data.token
   console.log(token)
   localStorage.setItem("token", token)
    return json;
   } catch (error) {
       console.error(error)
   }
}; 