import { FormControl, Input, Text, Button, Box } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AUTH_LOGIN } from "../../../store/types/RootReducer";
import { RootState } from "../../../store/types";
import api from "../../../libs/api";
import { useNavigate } from "react-router-dom";



export default function FormLogin() {
	
	const dispatch = useDispatch()
	const data = useSelector((state : RootState) => state.auth)


	const handleChange = (e: any) => {
		const { name, value } = e.target;
		dispatch(
		  AUTH_LOGIN({
			...data,
			[name]: value,
		  })
		);
	  };

	  console.log(data);
	  
	  const navigate = useNavigate()
	  
	  const handleSubmit = async (e: any) => {
		e.preventDefault();

        try {
            const response = await api.post("/login", data);
            const token = response.data.token
            localStorage.setItem("token", token)
            navigate('/')
                
            
        } catch (error : any ) {
            console.log(error)

        }
	  }

	return (
		

		<FormControl 
			isRequired
			display={"flex"}
			flexDirection={"column"}
			gap={3}
			width={"350px"}
			bg={"transparent"}
			color={"blue"}
			border={"1px solid blue"}
			borderRadius={10}
			padding={5}	
		>

			<Text color="Blue" fontSize={"2xl"} fontWeight={"bold"}>
				Hoyolab
			</Text>

			<Text fontSize={"2xl"} fontWeight={"bold"}>
				Login to Hoyolab
			</Text>

			<Input onChange={handleChange}
				placeholder="Username"
				name="username"
			/>

			<Input onChange={handleChange}
				type="password"
				placeholder="Password"
				name="password"
			/>

			<Box display="flex" justifyContent={"flex-end"}>

				<Text>Forgot password?</Text>

			</Box>

			<Button
				backgroundColor={"blue.400"}
				colorScheme="blue"
				color={"white"}
				type="submit"
				onClick={handleSubmit}>
				Login
			</Button  >

		</FormControl>
	
	);
}