import React, { Component } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import {registerAction} from '../../actions/actions'
import { connect } from 'react-redux' 

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name:this.state.name,
            price:this.state.price,
            quantity:this.state.quantity
        }
       this.props.registerAction(formData)
        console.log(formData)
    }
    
    render(){
        const {register} = this.props
       
        
        return(
            <div>
                <div>{register.isLoading ? <div>Loading....</div>:'', setTimeout(() => {
                    
                }, 3000)}</div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group className="m-auto w-50" style={{fontFamily:'roboto'}}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                             type="text" 
                             placeholder="Enter your name" 
                             name="name"
                              value={this.state.name}
                              onChange={this.handleChange}
                              />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group className="m-auto w-50" style={{fontFamily:'roboto'}}>
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                            type="number" 
                            placeholder="Enter your price"  
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}

                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group className="m-auto w-50" style={{fontFamily:'roboto'}}>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control 
                            type="number" 
                            placeholder="Enter your price"  
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange}

                            />
                        </Form.Group>
                    </Form.Row>
                    <input type="submit" style={{marginLeft:'45%', top:'30px', position:'relative'}}/>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    register:state.register
})
export default connect(mapStateToProps, {registerAction})(Register)