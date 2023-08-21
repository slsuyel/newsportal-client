import  { useState, useEffect } from "react";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const bodyElement = document.body;
        const newscardElements = document.querySelectorAll(".newscard");

        if (isDarkMode) {
            bodyElement.classList.add("dark-mode");
            newscardElements.forEach(card => {
                card.classList.add("dark-mode");
            });
        } else {
            bodyElement.classList.remove("dark-mode");
            newscardElements.forEach(card => {
                card.classList.remove("dark-mode");
            });
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <button className="btn bg-2nd px-2 py-0 rounded-circle" onClick={toggleDarkMode}>
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
    );
};

export default DarkMode;
