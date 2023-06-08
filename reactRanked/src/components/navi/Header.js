import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse,
         Nav, NavItem, NavLink, } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
        });
      }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand>
                
                <FontAwesomeIcon icon={faHome} /> Home
                
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse
            isOpen={this.state.isOpen}
            navbar
            style={{ justifyContent: "flex-end", marginRight: "100px" }}
            >
                
                <Nav className="mr-auto" navbar> 
                <NavItem>
                        <NavLink>
                            
                            <FontAwesomeIcon icon={faUser} /> User
                            
                        </NavLink>
                    </NavItem>
                </Nav>
                
                <Nav className="ml-auto" navbar>
                    
                    <NavItem>
                        <NavLink>
                            
                            <FontAwesomeIcon icon={faShoppingCart} /> Sepet
                            
                        </NavLink>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    )
  }
}
