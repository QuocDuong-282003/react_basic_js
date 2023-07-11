import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        showJobs: false
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert('Click me')
    }
    handleShow = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete =( job)=>{
       
        console.log('>>>handleOnclickDelete' ,job )
        this.props.deleteJob(job)
    }
    render() {

        console.log('<<< check props:', this.props)
        let { arrJobs} = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs =true' : 'showJobs= false';
        console.log('>>>> check', check)
        return (
            <>
                {/* <> giup bọc ngoai 2 the div và in ra 2 thẻ div rieng biệt*/}
                {/* 40 điều kiện đẻ show ra lương */}
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShow()}>show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {/*   dùng vòng lặp map của js */}
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title}-{item.salary}<></> 
                                            <span onClick= { () =>this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShow()}>hide</button></div>
                    </>
                }
            </>
        )
    }
}
// dùng function component
// const ChildComponent = (props) => { // arrow function


//     let {  arrjobs} = props;
//     return (
//         <>
//             {/* <> giup bọc ngoai 2 the div và in ra 2 thẻ div rieng biệt*/}

//             <div className="job-lists">
//                 {/*   dùng vòng lặp map của js */}
//                 {
//                     arrjobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title}-{item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }


export default ChildComponent;

