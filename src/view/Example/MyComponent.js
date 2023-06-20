import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component{
    
    state= {
        firstName:'',
        lastName:'',
        arrJobs:[
            { id:'duongJob1', title:'developer', salary:'500 $' },
            { id:'duongJob2', title:'Testers', salary:'400 $' }
        ]
    }
    handleChangeFirstName =(event) =>{
           this.setState({
            firstName: event.target.value
           })
    }
    handleChangeLastName =(event) =>{
        this.setState({
            lastName: event.target.value
        })
 }
 handleSubmit = (event)=>{
    event.preventDefault()
    alert('Click me')
 }
    render(){
        // let name='Duong';
        return(
          <>
         {/* <> giup bọc ngoai 2 the div và in ra 2 thẻ div rieng biệt*/}
                
         <form >
  <label htmlFor="fname">First name:</label><br/>
  <input
    type="text"
    value={this.state.firstName}
    onChange={(event)=>this.handleChangeFirstName(event)}
    /><br/>
  <label htmlFor="lname">Last name:</label><br/>
  <input type="text"  value={this.state.lastName}
  onChange={(event)=>this.handleChangeLastName(event)} /><br/><br/>
  <input type="submit" 
  onClick={(event)=>this.handleSubmit(event)}/>
    </form> 
     <ChildComponent
        name={this.state.firstName}
        age={20}
        adress={'Nghe An'}
        abc={this.state.arrJobs}/>
            </>
        )
    }
}
export default MyComponent;