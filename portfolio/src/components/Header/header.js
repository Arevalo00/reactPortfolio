
import React, {useState, useEffect}from "react";
// bring in css 


const Header = () => {

    const [ headerVisible, setHeaderVisible] = useState(false);
    const [smallScreen, SetSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("( max-width: 700px)");
        mediaQuery.addEventListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        
        return () => {
            mediaQuery.removeEventListener(handleMediaQueryChange);

        };
    
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            SetSmallScreen(true)
            
        } else {
            SetSmallScreen(false)
        }
    };

    const navToggle = () => {
        setHeaderVisible(!headerVisible);
    };

    return(
        <header className="Header">
            

        </header>
    )



 
};

export default Header;