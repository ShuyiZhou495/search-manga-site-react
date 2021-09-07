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
  FormGroup,
  Row,
  Col
} from 'reactstrap';
import { useFormik } from 'formik';
import Logo from './logo.js';
import styles from './navbar.module.scss';

function MyNavItem(props){
    return (
        <Col md={{ size: 4, offset: props.offset}} className={styles.navitem}>
        <NavItem >
            <NavLink className={styles.font} href="/posts/first"> <b className={styles.color}>{props.children}</b> </NavLink>
        </NavItem>
        </Col>
    )
}

function NavBorder(props){
    return(
        <Col md={{ size: 1}} className={styles.center}/>
    )
}

function MyNav(props){
    return (
        <Nav className={"mr-auto", styles.nav} navbar>
            <NavBorder />
            <MyNavItem>開始</MyNavItem>
            <NavBorder />
            <MyNavItem>日光</MyNavItem>
            <NavBorder />
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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
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
        <Col sm={{size: 4, offset: 8}} className={styles.searchborder, "fixed-top"}>
        <Form inline onSubmit={formik.handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
                id="query"
                name="query"
                type="search"
                placeholder="検索"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={styles.input}
                size={17}
            />
            <Button className={"my-2 my-sm-0", styles.search} outline color="dark" type="submit">
                <SearchIcon />
            </Button>
            </FormGroup>
        </Form>
        </Col>
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
            <div className={styles.navbar}>
                <Navbar light expand="md" className="fixed-top">
                    <NavbarBrand> <Logo home={false}/></NavbarBrand>
                    
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <MyNav />
                    </Collapse>
                </Navbar>
            </div>
            <Search/>
            </div>
        )
    }

}