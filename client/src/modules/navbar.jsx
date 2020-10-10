import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faDatabase, faCodeBranch, faBug, faPlayCircle, faCommentDots, faChartLine } from '@fortawesome/free-solid-svg-icons'


const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img src="https://miro.medium.com/fit/c/336/336/2*6-fyWxoO2_zUyhtHGh4ktA.png" alt="logo"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <FontAwesomeIcon icon={ faDatabase } color={'#73d7ff'} />
                            <NavLink href="/#/">Data Library</NavLink>
                        </NavItem>
                        <NavItem>
                            <FontAwesomeIcon icon={ faCodeBranch } color={'#73d7ff'} />
                            <NavLink href="/#/">Workflows</NavLink>
                        </NavItem>
                        <NavItem>
                            <FontAwesomeIcon icon={ faPlayCircle } color={'#73d7ff'} />
                            <NavLink href="/#/">Scheduler</NavLink>
                        </NavItem>
                        <NavItem>
                            <FontAwesomeIcon icon={ faBug } color={'#73d7ff'} />
                            <NavLink href="/#/">Error Manager</NavLink>
                        </NavItem>
                        <NavItem>
                            <FontAwesomeIcon icon={ faCommentDots } color={'#73d7ff'} />
                            <NavLink href="/#/">Notifications</NavLink>
                        </NavItem>
                        <NavItem>
                            <FontAwesomeIcon icon={ faChartLine } color={'#73d7ff'} />
                            <NavLink href="/#/">Reports</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <NavItem className="text">
                            <FontAwesomeIcon icon={ faQuestionCircle } />
                        </NavItem>
                        <p className="username" />
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;