import React from "react";

import LogoImg from "./szkola-reacta-logo.png";

const styles= {
    width:150,
    height:'auto'
};

function Logo() {
    return (
        <div>
            <img src={LogoImg} alt="Logo" style={styles} />
        </div>
    );
}

export default Logo;