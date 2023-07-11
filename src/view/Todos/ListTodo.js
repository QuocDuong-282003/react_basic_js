import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        lisTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Playing game' },
        ],
        
        editTodo: {}
    }

    // func thêm ( add)
    addNewTodo = (todo) => {
        this.setState({
            lisTodos: [...this.state.lisTodos, todo],
        })
        toast.success("Wow so easy!"); // thành công
        //toast.error("Wow so easy!"); // thông báo  lỗi
        //toast.info("Wow so easy!"); 
    }
    // func delete ( xóa)

    handleDeleteTodo = (todo) => {

        let currentTodos = this.state.lisTodos;
        // hàm filter trả ra 1 chuổi mới
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            lisTodos: currentTodos
        })
        toast.success("Delete Success ");

    }

    // hàm edit( sửa)
    handleEditTodo = (todo) => {
        let { editTodo, lisTodos } = this.state;
        let isEmptyObj  = Object.keys(editTodo).length === 0;
        // save
        if (isEmptyObj  === false && editTodo.id === todo.id) {

            let lisTodosCopy = [...lisTodos];
            let objIndex = lisTodosCopy.findIndex((item => item.id === todo.id));



            //Update object's name property.
            lisTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                lisTodos: lisTodosCopy,
                editTodo: {}
            })
            toast.success("Update Success ");



            return;

        }


        // edit
        this.setState({
            editTodo: todo
        })
    }


    // hàm add khi bạn edit
    handleOnchangeEditTodo = (event) => {

        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { lisTodos, editTodo } = this.state;
        // let listTdos= this.state.listTodos;

        // check obj có rỗng ?
        let isEmptyObj  = Object.keys(editTodo).length === 0;



        return (
                    <>
 <p>
          Hello world with To dos App
        </p>

            <div className='list-todo-container'>
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className='list-todo-content'>
                    {/* điều kiện */}
                    {lisTodos && lisTodos.length > 0 &&
                        lisTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    {isEmptyObj  === true ?
                                        <span> {index + 1}- {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} -<input value={editTodo.title}
                                                        onChange={(event) => this.handleOnchangeEditTodo(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1}- {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button  className='edit'
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj  === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button type="button" className='delete'
                                        onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                </div>
                            )

                        })
                    }


                </div></div>
            </>
        )
    }
}
export default ListTodo;