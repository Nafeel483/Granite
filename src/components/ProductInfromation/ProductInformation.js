import React from 'react';
import { Row, Col } from 'reactstrap';
import './style.css';
import OfferHours from '../Header/TopHeader/OfferHours';
import { Link } from 'react-router-dom';
const ProductsInformation = props => {
    const { data } = props
    return <div className="productLayout">
        {data &&
            <Row>
                <Col sm="6">
                    <img style={{ width: '100%' }} src={data.image} />
                </Col>
                <Col sm="6">
                    <div className="productInformationLayout">
                        <p>{data.title}</p>
                    </div>
                    <div className="productInformationLayoutWrapper">
                        <p>{data.heading}</p>
                    </div>
                    <div className="productInformationLayoutPricing">
                        <p>{data.priceDetail}</p>
                    </div>
                    <div className="productInformationLayoutDescription">
                        <p>{data.priceDescription}</p>
                    </div>
                    <p style={{ color: '#777' }}>{data.titleDescription}</p>
                    <div className="bottomTimeWrapper">
                        <div className="bottomLayout">
                            <OfferHours value={0} type={"days"} />
                            <OfferHours value={0} type={"hr"} />
                            <OfferHours value={0} type={"min"} />
                            <OfferHours value={0} type={"sec"} />
                        </div>
                    </div>
                    <div className="productBottomTimeWrapper">
                            <Link to="/store/products">
                        <div className="buttonlayout" >
                            <p className="shopWrapper">
                                Shop Now
                </p>
                        </div>
                </Link>
                    </div>
                </Col>
            </Row>
        }
    </div>
};
export default ProductsInformation;
