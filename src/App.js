import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import WorksPage from "./pages/WorksPage/WorksPage"
import ContactsPage from "./pages/ContactsPage/ContactsPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ServicesPage from "./pages/ServicesPage/ServicesPage"

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="works" element={<WorksPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
        </Routes>
    )
}

export default App
