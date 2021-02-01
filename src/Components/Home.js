import React, { Component } from 'react'
import DisplayList from './DisplayList'
import Header from './Header'
import StudnetData from '../Data/StudentData'
 
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            data : StudnetData,
            filterData : StudnetData
        }
    }
    handleFilterbyName = (userInputByName)=>{
     const output = this.state.data.filter((item)=>{
            return item.name.indexOf(userInputByName) >-1;
       })
        this.setState(
            {filterData : output}
        )
    }
    handleFilterByAge = (userInputByAge)=>{
        const outputAge = this.state.filterData.filter(item=>{
            return item.age.indexOf(userInputByAge) >-1
        })
        this.setState({
            filterData : outputAge
        })
    }
    handleFilterByGender =(userInputByGender)=>{
        const outputGender = this.state.filterData.filter(item =>{
            return item.gender.indexOf(userInputByGender) >-1;
        })
        this.setState({
            filterData : outputGender
        })
    }
    render() {
        return (
            <div>
                <Header outputByName={(data)=>{this.handleFilterbyName(data)}} outputByAge = {(data)=>{this.handleFilterByAge(data)}} outputByGender={(data)=>{this.handleFilterByGender(data)}} />
                <DisplayList info={this.state.filterData}/>
            </div>
        )
    }
}
