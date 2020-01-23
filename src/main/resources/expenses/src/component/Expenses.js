import React, { Component } from 'react'
import NavBar from './navbar/Navbar';
import DatePicker from 'react-datepicker';
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";
import {Form, Container, Input, Button, Label, FormGroup, Table} from 'reactstrap';
import { Link } from 'react-router-dom';

class Expenses extends Component {

    emptyItem = {
            "title":"",
            "description":"",
            "location":"",
            "date": new Date(),
            "category":{
               "id":1,
               "name":"Travel"
               }
    }
    constructor (props){
        super(props)
        this.state = {
            date: new Date(),
            isLoading: true,
            expenses: [],
            categories: [],
            item:this.emptyItem,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }
    async handleSubmit(event){
        const item = this.state.item;
       await fetch(`/api/expenses`, {
            method: 'POST',
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

    async remove(id){
        await fetch(`/api/expenses/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedExpenses = [...this.state.expenses].filter (i => i.id !== id);
            this.setState({expenses: updatedExpenses});
        });
    }
     async componentDidMount(){
         const response = await fetch('api/categories');
         const body = await response.json();
         this.setState({categories:body});

         const responseExp = await fetch('api/expenses');
         const bodyExp = await responseExp.json();
         this.setState({expenses:bodyExp, isLoading:false});
     }
    render() { 
        const title = <h3>Add Expenses</h3>;
        const {categories} = this.state;
        const {expenses, isLoading} = this.state;

        if(isLoading)
            return (<div> Loading.... </div>);
            let optionList = categories.map( category =>
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option> 
                )
            let rows = expenses.map( expense =>
                <tr key ={expense.id}>
                    <td>{ expense.title }</td>
                    <td>{ expense.description }</td>
                    <td>{ expense.location }</td>
                    <td>{ expense.category.name }</td>
                    <td>{ expense.date }</td>
                    <td><Button color="secondary" tag={Link} to={`/expenses/${expense.id}`}>Edit</Button> | <Button size="sm" color="danger" onClick ={ ()=> this.remove(expense.id)}> Delete</Button></td>
                </tr>
            )
        return (  
            <div>
                <NavBar />
                <Container>
                    {title}
                    <Form onSubmit = {this.handleSubmit}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input id="title" type="text" name="title" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="title">Description</Label>
                            <Input id="description" type="textarea" name="description" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="category">Category</Label> 
                            <select onChange={this.handleChangeCategory} className="form-control">
                                {optionList}
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
                {' '}
                <Container>
                    <h3> Expenses List</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="10%">Title</th>
                                <th width="20%">Description</th>
                                <th width="5%">Location</th>
                                <th width="5%">Category</th>
                                <th width="5%">Date</th>
                                <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
 
export default Expenses;