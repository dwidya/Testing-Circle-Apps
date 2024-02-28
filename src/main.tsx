import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider,  extendTheme } from "@chakra-ui/react";
import { RootReducer } from "./store/types/RootReducer.ts";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";


const theme: any = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white"
      }
    }
  },
  colors: {
    dark: "#222"
  }
}) 

const store = configureStore({
  reducer: RootReducer,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
      </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

