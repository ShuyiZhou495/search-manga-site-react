import React from 'react';
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
  Button,
  Form,
  Input,
  FormGroup
} from 'reactstrap';
import { useFormik } from 'formik';
import Logo from './logo.js';

function MyNav(props){
    return (
        <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/posts/first"> First </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/posts/first"> Second </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        Option1
                    </DropdownItem>
                    <DropdownItem>
                        Option2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Option3
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    )
}

function Search(props){
    const formik = useFormik({
        initialValues: {
            query: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return(
        <Form inline onSubmit={formik.handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
                id="query"
                name="query"
                type="search"
                placeholder="search"
                onChange={formik.handleChange}
                value={formik.values.email}

            />
            <Button className="my-2 my-sm-0" outline color="danger" type="submit">Search</Button>
            </FormGroup>
        </Form>
    )
}

export default class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle () {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        return(
            <div>
                <Navbar color="light" light expand="md" className="fixed-top">
                    <NavbarBrand> <Logo home={false}/></NavbarBrand>
                    <Search />
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <MyNav />
                    </Collapse>
                </Navbar>
            </div>
        )
    }

}