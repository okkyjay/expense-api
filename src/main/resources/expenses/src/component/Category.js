import React, { Component } from 'react';
import NavBar from './navbar/Navbar';
import Container from 'reactstrap/lib/Container';
class Category extends Component {
    state = {  
        isLoading: true,
        categories: []
    }
    async componentDidMount(){
        const response = await fetch('/api/categories')
        const body = await response.json();
        this.setState({
            categories: body,
            isLoading: false
        });
    }
    render() {
        const {categories, isLoading} = this.state; 
        if(isLoading)
            return (<div> Loading.... </div>);
        return (  
            <div>
            <NavBar />
                <Container>
                    <h2> Categories </h2>
                    {
                        categories.map( category =>
                            <div key={category.id} id={category.id}>
                                {category.name}
                            </div> 
                        )
                    }
                </Container>
            </div>
        );
    }
}
 
export default Category;