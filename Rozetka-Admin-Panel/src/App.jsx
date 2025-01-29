import { Route, Routes, BrowserRouter } from "react-router-dom";
import { routes } from "@constants/routes";
import Layout from "@components/Layout/Layout";
import NoteFound from "@components/NoteFound/NoteFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NoteFound />}></Route>
        <Route path='/' element={<Layout />}>
          {Object.values(routes).map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
