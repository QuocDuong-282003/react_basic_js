import React from "react";

class MyComponent extends React.Component{
    
    state={
        name: 'Quoc Duong',
        channel:'Duong Cute',
    }
    handleOnChangeName=(event) =>{
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton =()=>{
        alert("Click me");
    }
    render(){
        let name='Duong';
        return(
          <>
         {/* <> giup bọc ngoai 2 the div và in ra 2 thẻ div rieng biệt*/}
                
            
            <div className="first">
                <input type="text" value={this.state.name}
                onChange={(event)=> this.handleOnChangeName(event)}/>
                Hello my component , My name is {this.state['name']}
            </div>
            <div className="second">
                Tran Quoc Duong: {this.state.channel}
            </div>
            <div className="third">
                <button onClick={() => this.handleClickButton()}>Click me</button>
                
            </div>
            </>
        )
    }
}
export default MyComponent;