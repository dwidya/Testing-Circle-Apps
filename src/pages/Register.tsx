import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FormRegister from "../features/auth/components/FormRegister";

export default function Register() {
	const navigate = useNavigate();
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			marginTop={"50px"}
			color={"blue"}>
            <FormRegister />

			<Box display={"flex"} gap={2}>
				<Text>Already have account?</Text>
				<Text
					color={"blue"}
					cursor={"pointer"}
					onClick={() => navigate("/Login")}>
					Login
				</Text>
			</Box>
		</Box>
	);
}