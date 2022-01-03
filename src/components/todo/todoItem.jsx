import { Component } from "react";

class TodoItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {todo, onChange, onDelete} = this.props;
        return(
            <div className="divItem">
                <input className="divItemInput" type="checkbox" checked={todo.isCompleted} onChange={e =>{
                    //e.target.checked
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                <span className="itemSpan">{todo.text}</span>
                <button className="divItemBtn" onClick={() => onDelete(todo)}>X</button>
            </div>
        )
    }
}

export default TodoItem;