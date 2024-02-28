import { useState, ChangeEvent, FormEvent} from "react"
import api from "../../../libs/api";
import { useNavigate } from "react-router-dom";
import data from "../../../utils/data";



export function useFormRegister() {
    



    
    const navigate = useNavigate()

    const [form , setForm] = useState({
        full_name: "",
        username: "",
        email: "",
        password: "",
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        });
    }

    console.log();

    async function register (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

                
        try {
            const response = await api.post("/register", data);
            const token = response.data.token
            localStorage.setItem("token", token)
            navigate ("/login")
            
        } catch (error : any ) {
            console.log(error)

        }
        
    }

     return {
         handleChange,
         register,
     };

}