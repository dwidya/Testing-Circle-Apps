import { useState, ChangeEvent, FormEvent} from "react"
import api from "../../../libs/api";
import { useNavigate } from "react-router-dom";



export function useFormLogin() {
    
    const navigate = useNavigate()




    const [form , setForm] = useState({
        username: "",
        password: "",
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        });
    }

    async function login (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await api.post("/login", form);
            const token = response.data.token
            localStorage.setItem("token", token)
            navigate ("/")
                
            
        } catch (error : any ) {
            console.log(error)

        }
        
    }

     return {
         handleChange,
         login,
     };

}