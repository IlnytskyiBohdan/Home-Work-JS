import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo";
import Swapi from "./components/Swapi/Swapi";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <Provider store={store}>
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Header />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 2 }}
        >
          <Routes>
            <Route
              path="/About-me"
              element={<AboutMe />}
            ></Route>
            <Route
              path="/Todo"
              element={<Todo />}
            ></Route>
            <Route
              path="/Swapi"
              element={<Swapi />}
            ></Route>
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </Box>
    </Provider>
  );
}

export default App;
