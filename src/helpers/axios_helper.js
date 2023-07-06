import axios from 'axios';
import { getUser } from './auth_helper';


const _callApi = (token) => {
    const headers = {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        'Access-Control-Allow-Origin': '*', // Ajoutez cette ligne pour spécifier l'origine autorisée
    };

    return axios.get("http://localhost:8081/api/products/", {headers});
}

export const callApi = async () => {
    const user = await getUser();
    console.log("user_deb : "+user);

    if (user && user.access_token) {
        console.log("user_deb_access Token => "+user.access_token);
        return _callApi(user.access_token).catch(error => {
            throw error;
        });
    } else {
        throw new Error('user is not logged in');
    }
}
