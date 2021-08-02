import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './nav.css';
import { logout } from '../Auth/actions';
import { NavLink as RRNavLink } from 'react-router-dom';
const Header = (props) => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const { authToken } = useSelector((state) => state.auth);

  const tHeader = () => setCollapsed(!collapsed);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className='nav'>
      <Navbar className='nav__body' color='dark' dark>
        <NavbarBrand href='/' className='mr-auto'>
          Media Platfrom
        </NavbarBrand>
        <Nav navbar>
          {!authToken && (
            <React.Fragment>
              <NavItem>
                <NavLink to='/login' activeClassName='active' tag={RRNavLink}>
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/signup' activeClassName='active' tag={RRNavLink}>
                  Signup
                </NavLink>
              </NavItem>
            </React.Fragment>
          )}

          {authToken && (
            <NavItem>
              <NavLink onClick={(e) => handleLogout(e)}>Logout</NavLink>
            </NavItem>
          )}
        </Nav>

        {/* <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Navbar>
    </div>
  );
};

export default Header;
