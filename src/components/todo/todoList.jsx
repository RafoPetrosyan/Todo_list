import { Component } from "react";
import TodoItem from "./todoItem";

class TodoList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {todos, onChange, onDelete} = this.props;
        return(
            <div className="todo">
                {todos.map(todo =>{
                   return( 
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        onChange={onChange}
                        onDelete={onDelete}
                    />
                   )
                })}
            </div>
        )
    }
}

export default TodoList;