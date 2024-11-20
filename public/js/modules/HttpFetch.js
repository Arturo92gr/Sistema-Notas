import { Http } from "./Http.js";

export class HttpFetch extends Http {
    obtenerUI(route, callBackOnSuccess){
        fetch(`${this.base_url}/${route}`).then(
            (response) => {
                response.json().then(
                    (data) => {
                        callBackOnSuccess(data);
                    }
                ).catch((error) => {
                   console.log(error);
                });
            }
        ).catch((error) => {
            console.log(error);
        });
    }
}