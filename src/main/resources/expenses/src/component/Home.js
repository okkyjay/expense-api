import React, { Component } from 'react'
import Navbar from '../component/navbar/Navbar'
import { Container } from 'reactstrap'
class Home extends Component {
    state = {}
    render() { 
        return ( 
            <div>
                <Navbar />
                <Container>
                    <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh'}}>Welcome to easy expense app</h2>
                </Container>
            </div>
        );
    }
}
 
export default Home;