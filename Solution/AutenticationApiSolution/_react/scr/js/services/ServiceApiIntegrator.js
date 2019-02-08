import axios from 'axios';

class ServiceApiIntegrator{
    constructor() {
        this.token = localStorage.getItem('id_token');
        this.api = axios.create({
            baseURL: 'https://'+window.location.host+'/'+apiCaller,
            timeout: 1000,
            headers:{'Autorization':'Bearer '+ token}
        })
        this.getResponseData = this.getResponseData.bind(this);
    }

    getResponseData(path){
        this.api.get(path)
            .then(response =>{
                return response.data;
            })
            .catch(error =>{
                return error;
            })
    }




    
}

export default ServiceApiIntegrator;