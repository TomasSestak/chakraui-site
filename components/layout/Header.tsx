import React from "react";
import MenuToggle from "../parts/MenuToggle";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <MenuToggle toggle={toggle} isOpen={isOpen}/>
    )
}
export default Header;