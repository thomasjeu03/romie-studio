import React, {useEffect} from 'react'
import App from './App'
import './style/global.scss'
import { createRoot } from "react-dom/client";
import {BrowserRouter, useLocation} from "react-router-dom";

const root = createRoot(document.getElementById("root"));

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

root.render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
);
