import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contacts from "./pages/Contacts/Contacts";
import NoteFound from "./pages/NoteFound/NoteFound";
import { ThemeProvider } from "./components/context/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

export default function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/about"
              element={<AboutMe />}
            />
            <Route
              path="/contacts"
              element={<Contacts />}
            />
            <Route
              path="*"
              element={<NoteFound />}
            />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
