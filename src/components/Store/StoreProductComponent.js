import React from 'react';
import { Container, Row, Col, } from 'reactstrap';
import StoreProducCard from './StoreProductCard';
const StoreProductComponent = (props) => {
    return (
        <Container fluid>
            <Row>
                {
                    props.data.map(product => (
                        <Col className="storeProductComponentWrapper" sm={props.size}>
                            <StoreProducCard
                                Description={product.name}
                                price={product.price}
                                image={product.productPic[0].img}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};
export default StoreProductComponent;