import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {

    state = {
      
        arrJobs: [
            { id: 'duongJob1', title: 'developer', salary: '500 $' },
            { id: 'duongJob2', title: 'Testers', salary: '400 $' }
        ]
    }
    
   addNewJob =(job) =>{
    console.log('check job from parent:', job)
    this.setState({
        arrJobs: [...this.state.arrJobs, job]
    })
   }
   deleteJob =(job)=>{
    let currenJobs= this.state.arrJobs;
     currenJobs= currenJobs.filter(item => item.id !== job.id)
     this.setState({
        arrJobs: currenJobs
     })
   }

   //  Mounting 
   componentDidUpdate( prevProps,prevState ){
    console.log('>>> run did update','prev state:', prevState, 'current state:',  this.state)
   }
       componentDidMount(){
          console.log('>>>> run component did mount')
       }
    render() {
        // let name='Duong';
        console.log('>>>> call render:', this.state)
        return (
            <>
                {/* <> giup bọc ngoai 2 the div và in ra 2 thẻ div rieng biệt*/}

                <AddComponent
                   addNewJob= {this.addNewJob} 
                   />
               
                <ChildComponent
                  
                  arrJobs={this.state.arrJobs}
                  deleteJob={this.deleteJob}
                  />
            </>
        )
    }
}
export default MyComponent;