import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../Footer';
import Header from '../Header/Header';
import StoreHeaderComponent from './StoreHeaderComponent';
import StoreFliterComponent from './StoreFilterComponent';
import StoreProductComponent from './StoreProductComponent';
import SortProduct from './SortProducts';
import * as Constants from '../../constants';
import twoGrid from '../../images/Icons/icon2.png';
import threeGrid from '../../images/Icons/icon3.png';
import fourGrid from '../../images/Icons/icon4.png';

import './style.css';

class StoreHome extends Component {
    state={
        size:4
    }
    render() {       
        return (
            <>
                <Header />
                <StoreHeaderComponent data={this.props.categories}
                    titleHome={Constants.SHOP}
                />
                <div className='storeHomeWrapper'>
                    <Container fluid>
                        <Row>
                            <Col sm="3">
                                <div className='storeHomeFilterWrapper'>
                                    <h6>COLOR</h6>
                                    <StoreFliterComponent
                                        name='Blue'
                                        stock='(6)'
                                    />
                                    <hr />
                                    <h6>SLAB THICKNESS</h6>
                                    <StoreFliterComponent
                                        name='2CM'
                                        stock='(6)'
                                    />
                                    <hr />
                                    <h6>SURFACE FINISH</h6>
                                    <StoreFliterComponent
                                        name='Brushed'
                                        stock='(6)'
                                    />
                                    <hr />
                                </div>
                            </Col>
                            <Col sm="9">
                                <div >
                                    <div className='storeProductLayoutStyling'>
                                        <div className="storHomeMainWrappper">
                                            <div>
                                                <Link to="/"><p>Home</p></Link>
                                            </div>
                                            <p>/</p>
                                            <p>Shop</p>
                                        </div>
                                        <div className='storeGridWrapper'>
                                            <img onClick={()=>this.setState({size:6})}  style={{ margin:5,width: 25, height: 25 }} src={twoGrid} />
                                            <img onClick={()=>this.setState({size:4})}  style={{ margin:5,width: 25, height:25 }} src={threeGrid} />
                                            <img onClick={()=>this.setState({size:3})} style={{margin:5, width: 25, height: 25 }} src={fourGrid} />
                                            <div className="storeDropdownMenu">
                                            <SortProduct/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="storeHomeProductsLayout">
                                        <StoreProductComponent data={this.props.products} size={this.state.size} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
      products: state.products.products,
      categories: state.products.categories
    };
  };

export default connect(mapStateToProps)(StoreHome);