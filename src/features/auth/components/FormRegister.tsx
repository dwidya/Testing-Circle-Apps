import { FormControl, Input, Text, Button } from "@chakra-ui/react";
import { useFormRegister } from "../hooks/FormRegister"; 

export default function FormRegister() {

    const { handleChange, register } = useFormRegister();



    return (

    <form onSubmit={register}>
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

            <Text color={"blue"} fontSize={"2xl"} fontWeight={"bold"}>
                Register Account 
            </Text>

            <Text color={"blue"} fontSize={"2xl"} fontWeight={"bold"}>
                Hoyolab
            </Text>

            

            <Input onChange={handleChange}
                placeholder="Full name"
                name="full_name"
            />

            <Input onChange={handleChange}
            placeholder="Username" name="username"  />

            <Input placeholder="Email" name="email"  />

            <Input onChange={handleChange}
                type="password"
                placeholder="Password"
                name="password"
            />

            <Button
                backgroundColor={"blue"}
                colorScheme="blue"
                color={"white"}
                type="submit">
                Create
            </Button>

        </FormControl>
        </form>
    );
}