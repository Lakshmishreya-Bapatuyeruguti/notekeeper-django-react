import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesList from "./screens/NotesList";
import NoteMaking from "./screens/NoteMaking";
import { createContext, useState } from "react";
export const AppContext = createContext();
function App() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState("");
  return (
    <div className="flex flex-col h-screen justify-between">
      <AppContext.Provider value={{ notes, setNotes, user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/notes" element={<NotesList />} />
            <Route path="/notemaking" element={<NoteMaking />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
