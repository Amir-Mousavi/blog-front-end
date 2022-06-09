import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Home = () => <div>Home</div>

export default function AppRoute() {
    return <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
}