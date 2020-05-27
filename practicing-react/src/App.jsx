import React, {Component} from 'react';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            deadline: 'August 15, 2020',
            newDeadline: ''
        }
    }

    changeDeadline(){

        //we cant mutate state directly, use this.setState({}) to make change
        if(this.state.newDeadline !== ''){
        
            this.setState({
                deadline: this.state.newDeadline
            });
        }
        
    }

    render(){
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock 
                    deadline={this.state.deadline}    
                />
                <Form onSubmit={e => e.preventDefault()}>
                    <FormControl className="Deadline-input" placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})}/>
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;