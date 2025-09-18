import { useState } from "react"

export default function Switch({ isDarkMode, setDarkMode }) {
    return (
        <div className="w-50 mx-auto d-flex justify-content-end pt-2">
            <button className={isDarkMode ? 'bg-dark text-white p-2 rounded border border-secondary' : 'p-2 rounded border border-secondary'} 
                    onClick={setDarkMode}> {isDarkMode ? "Dark mode off" : "Dark mode on"} </button>
        </div>
    )
}