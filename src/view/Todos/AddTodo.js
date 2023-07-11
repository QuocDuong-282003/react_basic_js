import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
  state = {
    title: ''
  }
  handleOnchangeTile = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error(`Missing title's Todo`); // thông báo  lỗi
      return;
      //if( underfined /null/ empty) => false 
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title
    }
    this.props.addNewTodo(todo);
    this.setState({
      title: '' // mục đích sau mỗi lần ấn nút add thẻ input sẽ trở về rỗng
    })
  }
  render() {
    let { title } = this.state;
    return (
      <div className='add-todo'>
        <input type="text" value={title}
          onChange={(event) => this.handleOnchangeTile(event)} />
        <button type="button" className='add'
          onClick={() => this.handleAddTodo()}>Add</button>
      </div>
    )
  }
}
export default AddTodo;