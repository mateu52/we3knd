import React from "react";
import  Menu from "./Menu";
import Logo from "./Logo";
import NavLink from "./NavLink";

function Header() {
    return (
        <div>
            <Logo />
            <Menu>
                <NavLink to="/" label="Link 1"></NavLink>
                <NavLink to="/" label="Link 2"></NavLink>
                <NavLink to="/" label="Link 3"></NavLink>
            </Menu>
        </div>
    );
}

export default Header;