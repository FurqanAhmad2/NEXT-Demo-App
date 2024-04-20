"use client"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import AdminPanelPage from './Admin';

const Page: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/services" element={<AdminPanelPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default Page;
