
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

    

 
};

export default Header;