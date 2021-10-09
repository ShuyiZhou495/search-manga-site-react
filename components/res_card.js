import {
    Container, Col, Row,Button
  } from 'reactstrap';
import styles from './res_card.module.scss';
import React from 'react';

function ChevronLeft(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
    )
}
function ChevronRight(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    )
}
export default class ResCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSites: false
        };
        this.leftSlide = this.leftSlide.bind(this);
    }
    leftSlide() {
        this.setState({showSites: !this.state.showSites});
        console.log(this.state.showSites);
    }
    render(){
        const show = this.state.showSites
        return(
            <>
            <div className={styles.div}>
                <Container className={styles.container}>
                    <Row>
                        <Col xs="3" sm="2">
                            <img src={this.props.img} class="img-fluid"/>
                        </Col>
                        <Col xs="7" sm="9" className={styles.contents}>
                            <Row className={styles.title_block}>
                                <text className={styles.line}>|</text>
                                <text className={styles.title} id="manga_title">{this.props.title}</text>    
                            </Row>
                            <Row>
                                <Col xs="10" sm="11">
                                <Col className={show?styles.leftslide:styles.rightslide}>
                                    <text id="manga_description" className={styles.description}>{this.props.description}</text>
                                </Col>
                                </Col>
                                <Col xs="2" sm="1" key={show} className={show? styles.vertical_alignc: styles.vertical_align}>
                                    <Button outline color="secondary" className={styles.leftslidebutton} onClick={this.leftSlide}>
                                    {show? "紹介": "サイト"}<p>{show?<ChevronRight />: <ChevronLeft />}</p>
                                    </Button>
                                </Col>
                                <Col xs={{size: 10, offset: 2}} sm={{size: 11, offset: 1}} className={show?styles.sitesc: styles.sites}>
                                    <text id="manga_description" className={styles.sitestext}>{this.props.sites}</text>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
            </>
        )
    }
}