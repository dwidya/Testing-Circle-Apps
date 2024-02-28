// import { ChangeEvent,  useState } from "react";
// import api from "../../../libs/api";

// export function useThread() {
//     const [data, setData] = useState({
//         content: "",
//         image: null,
//     });

//     function handleChange(e: ChangeEvent<HTMLInputElement>) {
//         console.log(e.target);
//         const { name, value, files } = e.target;

//         if (files) {
//             setData({
//                 ...data,
//                 [name]: files[0],
//             });
//         } else {
//             setData({
//                 ...data,
//                 [name]: value,
//             });
//         }
//     }

//     async function postThread(e: React.MouseEvent<HTMLButtonElement | MouseEvent>)
//      { e.preventDefault();

//         try {
//             const response = await api.post("/thread", data);
//             const token = response.data.token
//             localStorage.setItem("token", token)
                
            
//         } catch (error : any ) {
//             console.log(error)

//         }
        
//     }
//     return {
//         handleChange,
//         postThread,
//     };
// }



// import { ThreadPost } from "../../../types/ThreadType";
// import API from "../../../libs/api";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { ChangeEvent, useRef, useState } from "react";

// export function usePostThread() {
// 	const [form, setForm] = useState<ThreadPost>({
// 		content: "",
// 	});

// 	const QueryClient = useQueryClient();
// 	const fileInputRef = useRef<HTMLInputElement>(null);

// 	function handleButtonClick() {
// 		fileInputRef.current?.click();
// 	}

// 	const [image, setImage] = useState<File | null>(null);

// 	function handleChange(e: ChangeEvent<HTMLInputElement>) {
// 		setForm({
// 			...form,
// 			[e.target.name]: e.target.files ? e.target.files : e.target.value,
// 		});
// 	}

// 	const { mutate: handlePost, isPending } = useMutation({
// 		mutationFn: async () => {
// 			const formData = new FormData();
// 			if (image) {
// 				formData.append("image", image);
// 			}
// 			formData.append("content", form.content);
// 			await API.post("/thread", formData);
// 		},
// 		onSuccess: () => {
// 			QueryClient.invalidateQueries({ queryKey: ["thread"] });
// 			setForm({
// 				content: "",
// 			});
// 			setImage(null);
// 		},
// 	});
// 	return {
// 		form,
// 		handleButtonClick,
// 		handleChange,
// 		handlePost,
// 		fileInputRef,
// 		isPending,
// 		setImage,
// 	};
// }

