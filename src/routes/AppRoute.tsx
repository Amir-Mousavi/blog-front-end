import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Signup from '../pages/auth/signup'

const Home = () => <div>Home</div>

export default function AppRoute() {
    return <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
}