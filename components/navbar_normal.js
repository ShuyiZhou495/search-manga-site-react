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
  Form,
  Input,
  Button,
  FormGroup,
  Col,
  Row
} from 'reactstrap';
import { useFormik } from 'formik';
import Logo from './logo.js';
import styles from './navbar_normal.module.scss';

function MyNavItem(props){
    return (
        <NavItem className={styles.navitem}>
            <NavLink href={props.link}> 
                <text className={styles.navline}>|</text>
                {props.children} 
            </NavLink>
        </NavItem>
    )
}

function MyNav(props){
    return (
        <Nav className={"mr-auto", styles.nav} navbar>
            <MyNavItem link='posts/first'>開始</MyNavItem>
            <MyNavItem>日光</MyNavItem>
            <Col md={{ size: 4}} className={styles.navitem}>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className={styles.font} nav caret>
                        <b className={styles.color}>なに</b>
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
            </Col>
        </Nav>
    )
}

function SearchIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
    )
}

function TheForm(props){
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
                <FormGroup>
                    <Input
                        id="query"
                        name="query"
                        type="search"
                        placeholder="検索"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className={styles.search}
                        size={17}
                    />
                    <Button 
                        type="submit"
                        className={styles.button}
                    >
                        <SearchIcon/>
                    </Button>
                </FormGroup>
            </Form>
    
        )
    
}
export default class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            width: 0
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
            <>
                <Navbar color="white" light expand="md" className={["fixed-top", styles.navbar].join(' ')}>
                    <NavbarBrand className={styles.logo} > <Logo home={false}/></NavbarBrand>
                    <TheForm />
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <MyNav />
                    </Collapse>
                </Navbar>
            </>
        )
    }

}