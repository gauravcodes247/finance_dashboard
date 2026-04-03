import React from 'react'
import { useState, useEffect } from 'react'

const DarkModeToggle = () => {

    const [darkMode, setDarkMode] = useState(
        ()=>localStorage.getItem("theme")==="dark"
    );

    useEffect(()=>{
        const root = document.documentElement;
        if(darkMode){
            root.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            root.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    }, [darkMode]);
  return (
    
    <button className=' flex justify-center px-2 py-2 rounded-xl bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-white '
    
    onClick={()=>setDarkMode((prev)=>!prev  )}
    >
        {darkMode ? "☀️Light Mode" : "🌑Dark Mode"}

    </button>  
    
  )
}

export default DarkModeToggle
