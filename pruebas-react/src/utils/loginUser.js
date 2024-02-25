import axios from "axios"


export const loginUser = async (credentials)=>{
    try{
        const {data} = await axios.post('http://localhost:8080/users/login', credentials);
        return data;
    }catch(error){
        console.log(error.message);
        alert('Nombre de usuario y/o contraseña incorrectos')
    }
}