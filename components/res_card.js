import {
    Container, Col, Row
  } from 'reactstrap';
import styles from './res_card.module.scss';

export default function ResCard(props){
    return(
        <>
            <Container className={styles.container}>
                <Row>
                    <Col xs="6" sm="2">
                        <img src={props.img} class="img-fluid"/>
                    </Col>
                    <Col xs="6" sm="9">
                        <Row>
                            <text id="manga_title">{props.title}</text>
                        </Row>
                        <Row>
                        <text id="manga_description">{props.description}</text>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}