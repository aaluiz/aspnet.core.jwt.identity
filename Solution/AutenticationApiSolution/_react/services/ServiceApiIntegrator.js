import axios from 'axios';

class ServiceApiIntegrator{
    constructor() {
        this.token = localStorage.getItem('id_token');
        this.homeUrl = 'https://'+window.location.host+'/';
        
        this.api = axios.create({
            baseURL: this.homeUrl,
            headers:{'Authorization':'Bearer '+ this.token}
        });

        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
        this.postBodyData = this.postBodyData.bind(this);
        this.processResponse = this.processResponse.bind(this);
        this.getApi = this.getApi.bind(this);
    }
    getApi(){
        return this.api;
    }

    get(path){ 
        this.api.get(this.homeUrl+path)
            .then(response =>{
                return this.processResponse(response);
            })
            .catch(error =>{
                alert(error.message);
                return error;
            })
    }

    post(path){
        this.api.post(this.homeUrl+path)
        .then(  response =>{
            return this.processResponse(response);
        })
        .catch(error =>{
            alert(error.message);
            return error;
        })
    }

    postBodyData(path,data){
        this.api.post(this.homeUrl+path,data)
        .then(response =>{
            return this.processResponse(response);
        })
        .catch(error =>{
            alert(error.message);
            return error;
        })
    }

    processResponse(response){
        if (response.data.succeeded===true){
            alert("Ação executada com sucesso!")
        }
        else if (response.data.succeeded===false){
            let result = "Erro! \n";
            response.data.errors.forEach(item => {
               result += item.code + "\n" + item.description + "\n";
            });
            alert(result);
        }
        else{
            return response.data;
        }
    }

}

export default ServiceApiIntegrator;