import React from "react";

import Logo from "./Logo";
import NavLink from "./NavLink";

function Header() {
    return (
        <div>
            <Logo />
            <div>
                <NavLink to="/" label="Link 1"></NavLink>
                <NavLink to="/" label="Link 2"></NavLink>
                <NavLink to="/" label="Link 3"></NavLink>
            </div>
        </div>
    );
}

export default Header;