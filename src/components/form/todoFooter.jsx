import { Component } from "react";

class TodoFooter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {todos, onClearCompleted} = this.props;
        const complitedSize = todos.filter(todo => todo.isCompleted).length;
        return(
            <div className="footer">
                <span>{complitedSize}/{todos.length} Compledet</span>
                <button className="footerBtn" onClick={onClearCompleted}>Cleaar Completed</button>
            </div>
        )
    }
}
export default TodoFooter;