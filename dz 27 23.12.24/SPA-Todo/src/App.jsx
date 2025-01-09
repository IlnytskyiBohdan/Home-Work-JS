import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, themes } from "./themesContext";
import NoteFound from "./components/NoteFound/NoteFound"
import HomePage from "./components/HomePage/HomePage";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe/AboutMe";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.day);

  return (
    <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
      <BrowserRouter>
        <ErrorBoundary>
          <div className={`content ${currentTheme.background} ${currentTheme.color}`}>
            <Header />
            <main>
              <Routes>
              <Route path="*" element={<NoteFound />}></Route>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/About-me" element={<AboutMe />}></Route>
              </Routes>
            </main>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
