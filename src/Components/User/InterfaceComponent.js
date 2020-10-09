import React, { Component } from 'react';
import { Card, Form, Button, Col,Row, Container, Table, ButtonGroup } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import UserService from '../../API/UserService';
import {faSave, faUndo, faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

class InterfaceComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            userId: '',
            role:'',
            password:''
        }
        this.SubmitUser = this.SubmitUser.bind(this);

    }

    SubmitUser(event){


        event.preventDefault();

        let user =
            {   userId:this.state.userId,
                password:this.state.password,
                role:this.state.role,
                
            };

        if(this.state.userId === -1)
        {
            UserService.createUser(user)
            .then(
                response => {

                    this.props.history.push("/addStudent")
                }

            )
         }
        else{

            UserService.updateUser(this.state.userId,user)
            .then(

                response => {
                    if(this.state.role === "student")
                   { 
                       this.props.history.push("/addStudent")
                    }
                    else{
                        this.props.history.push("/addInstructor")
                    }
                }
            )


        }      

    }
    

   UserChange = event =>{
            this.setState({
                [event.target.name] : event.target.value
            }); 
            
            }
    
    render() {
        const{userId,password,role} = this.state

        return (
            <div>
            <div className = "container" >  

            
                <Card className={"border border-dark "}>
                    <Card.Header><FontAwesomeIcon icon={faEdit} /> Register User</Card.Header>
                    <Form onSubmit={this.SubmitUser}  method="post">
                    <Card.Body>
                    
                        
                            <Form.Group as={Row} controlId="formHorizontalRole">
                                <Form.Label column sm={2}>Role</Form.Label>
                                <Col sm={10}>
                                <Form.Control type="text" name ="role"  placeholder="Role" value ={role} onChange ={this.UserChange} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridAuthor">
                            <Form.Label column sm={2}>User ID</Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" name="userId"  placeholder="User ID"  value ={userId} onChange ={this.UserChange}/>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridAuthor">
                            <Form.Label column sm={2}>Password</Form.Label>
                            <Col sm={10}>
                            <Form.Control type="password"  name ="password" placeholder="Password" value ={password} onChange ={this.UserChange} />
                            </Col>
                            </Form.Group>
                            
                          
                       
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button variant="success" size="sm" type="submit"  >
                             Register User
                            </Button> {' '}
                            
                            
                    </Card.Footer>
                        </Form>
                    </Card>
                
            </div>
            
            </div>
        );
    }
}

export default InterfaceComponent;