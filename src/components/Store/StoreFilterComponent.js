import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import './style.css';

const StoreFliterComponent = (props) => {
    return (
        <>
            <div className="filterComponent">
                <div>
                    <Form>
                        <FormGroup check>
                            <div className="formWrapperFilter">
                                <Label check>
                                    <Input type="checkbox" />
                                    {props.name}
                                </Label>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
                <div className="stockProducts">
                    <p>{props.stock}</p>
                </div>
            </div>
            <div className="filterComponent">
                <div>
                    <Form>
                        <FormGroup check>
                            <div className="formWrapperFilter">
                                <Label check>
                                    <Input type="checkbox" style={{color:'red'}} />
                                    {props.name}
                            </Label>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
                <div className="stockProducts">
                <p>{props.stock}</p>
                </div>
            </div>
        </>
    );
};

export default StoreFliterComponent;