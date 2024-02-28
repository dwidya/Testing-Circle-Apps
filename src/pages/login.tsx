
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../features/auth/components/FormLogin";

export default function Login() {

	const navigate = useNavigate();
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			marginTop={"50px"}
			color={"blue"}>
			<FormLogin />
			<Box display={"flex"} gap={2}>
				<Text>Don't have an account yet?</Text>
				<Text
					color={"blue"}
					cursor={"pointer"}
					onClick={() => navigate("/Register")}>
					Create account
				</Text>
			</Box>
		</Box>
	);
}