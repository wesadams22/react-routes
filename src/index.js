import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes, Link } from 'react-router-dom'
const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
    return (        
        <>
        <Routes>
            <Route path="/" element={<MyPage />}/>
            <Route path="/yours" element={<YourPage />}/>
            <Route path="/ours" element={<OurPage />}/>
        </Routes>
        </>
    )
}

const MyPage = ({ path }) => {
    return (
        <>
        <h1>This is My Page</h1>
        <Link to="/yours">Your Page</Link>
        <br></br>
        <Link to="/ours">Our Page</Link>
        </>
    )
}

const YourPage = ({ path }) => {
    return (
        <h1>This could be your page</h1>
    )
}

const OurPage = ({ path }) => {
    return (
        <h1>This page would belong to both of us</h1>
    )
}

root.render(
    <HashRouter>
        <App />
    </HashRouter>
)