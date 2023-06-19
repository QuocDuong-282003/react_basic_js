import React from "react";

class ChildComponent extends React.Component{
    
    state= {
        firstName:'',
        lastName:''
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
                
        <div>
        ChildComponent {this.props.name}
        </div>

            </>
        )
    }
}
export default ChildComponent;