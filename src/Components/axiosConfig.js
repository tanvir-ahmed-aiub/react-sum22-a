import axios from 'axios';
const instance = axios.create({
    baseURL:'http://localhost:8000/api'
    //baseURL: 'https://api.adweb.aiub.edu'
});

instance.interceptors.request.use((config)=>{
    config.headers.common["Authorization"] = localStorage.getItem('_authToken');
    //console.log("intercpeted");
    //console.log(config);
    return config;
},(error)=>{
    
});
instance.interceptors.response.use((rsp)=>{
    return rsp;
},(err)=>{
    if(err.response.status == 401){
        window.location.href="/";
    }
    return err;
});

export default instance;