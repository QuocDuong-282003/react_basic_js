import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
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
    render() {
        // let name='Duong';
        console.log('<<< check props:', this.props)
        let { name, age, adress, abc } = this.props;
        return (
            <>
                {/* <> giup bọc ngoai 2 the div và in ra 2 thẻ div rieng biệt*/}

                <div className="job-lists">
                    {/*   dùng vòng lặp map của js */}
                    {
                    abc.map((item, index) => {
                        return (
                            <div key={item.id}>
                                { item.title}-{item.salary}
                            </div>
                        )
                    })
                    }

                </div>

            </>
        )
    }
}
export default ChildComponent;

