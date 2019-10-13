import React from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return <Menu attached pointing secondary>
        <Menu.Item
            as={NavLink}
            exact
            to='/'
            name='home'
        />
    </Menu>
}

export default NavBar;
