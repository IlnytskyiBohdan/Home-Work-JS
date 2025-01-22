import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoForm from "./components/Todo Form/Todo Form";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Header />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 2 }}
        >
          <Routes>
            <Route
              path="/"
              element={<TodoForm />}
            ></Route>
            <Route
              path="/Contact"
              element={<Contact />}
            ></Route>
            <Route
              path="/About-me"
              element={<AboutMe />}
            ></Route>
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
