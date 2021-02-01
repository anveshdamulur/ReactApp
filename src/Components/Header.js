import React, { Component } from 'react'
import './style.css'
export default class Header extends Component {

    constructor(){
        super();
        this.state={
            name : 'User Input Here',
            age : 'Search by age',
            gender : 'Search by gender'
        }
    }

    handleChangeByName=(e)=>{
        console.log(e.target.value)
        this.setState({
            name  : e.target.value ? e.target.value:'User Input Here'
        })
        this.props.outputByName(e.target.value);
    }
    handleChangeByAge=(e)=>{
        this.setState({
            age : e.target.value ? e.target.value : 'Search by age'
        })
        this.props.outputByAge(e.target.value);
    }
  
    handleChangeByGender=(e)=>{
        this.setState({
            gender : e.target.value ? e.target.value : 'Search by Gender'
        })
        this.props.outputByGender(e.target.value);
    }
    render() {
        return (
            <div className="container-header">
                <center>
                    <input onChange={this.handleChangeByName} type="text"/>
                    <h1>{this.state.name}</h1>
                </center>
                <center>
                    <input onChange={this.handleChangeByAge} type="text"/>
                    <h1>{this.state.age}</h1>
                </center>
                <center>
                    <input onChange={this.handleChangeByGender} type="text"/>
                    <h1>{this.state.gender}</h1>
                </center>
            </div>

        )
    }
}
