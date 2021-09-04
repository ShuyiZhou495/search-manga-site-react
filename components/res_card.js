import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import {
    Container, Col, Row
  } from 'reactstrap';

export default function ResCard(props){
    return(
        <>
            <Container>
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