import React, {Component} from 'react';
import NavBar from './navbar/Navbar';
import DatePicker from 'react-datepicker';
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";
import {Form, Container, Input, Button, Label, FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';

class Expense extends Component{
    emptyItem = {
        "title":"",
        "description":"",
        "location":"",
        "date": new Date(),
        "category":{
           "id":1,
           "name":"Food"
           }
        }
        constructor (props){
            super(props);
            this.state = {
                expenseId: props.match.params.id,
                expense:[],
                date: new Date(),
                isLoading: true,
                categories: [],
                item:this.emptyItem,
            }
        }
    async handleSubmit(event){
        const item = this.state.item;
       await fetch(`/api/expenses`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
    
        
        event.preventDefault();
        this.props.history.push("/expenses");
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    
    handleChangeCategory(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item['category'][name] = value;
        this.setState({item});
    }
    
    handleDateChange(date){
        let item = {...this.state.item};
        item.date = date;
        this.setState({item});
    }

    async componentDidMount(){
        const response = await fetch(`api/categories`);
        const body = await response.json();
        this.setState({categories:body});

        const responseExp = await fetch(`api/expenses/${this.state.expenseId}`);
        const bodyExp = await responseExp.json();
        this.setState({expense:bodyExp, isLoading:false});
    }
    render(){
        const {expense, isLoading} = this.state;
        if(isLoading)
            return (<div> Loading.... </div>);
        return ( 
            <div>
                <NavBar/>
                <Container>
                    <h3>Edit expense</h3>
                    <Form onSubmit = {this.handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input id="title" value={expense.title} type="text" name="title" onChange={this.handleChange}/>
                    </FormGroup>
    
                    <FormGroup>
                        <Label for="title">Description</Label>
                        <Input id="description" value={expense.description} type="textarea" name="description" onChange={this.handleChange}/>
                    </FormGroup>
    
                    <FormGroup>
                        <Label for="category">Category</Label> 
                        <select onChange={this.handleChangeCategory} className="form-control">
                            
                        </select>
                    </FormGroup>
    
                    <FormGroup>
                        <Label for="expenseDate">Expense Date</Label>
                        <DatePicker name="date" selected={this.state.item.date} className="form-control" onChange={this.handleDateChange} />
                    </FormGroup>
    
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input type="text" name="location" id="location" onChange={this.handleChange}/>
                    </FormGroup>
                    
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button> {' '}
                        <Button color="secondary" tag={Link} to="/">Cancel</Button>
    
                    </FormGroup>
                </Form>
                </Container>
            </div>
          );
    }
}
 
export default Expense;