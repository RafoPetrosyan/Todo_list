import { Component } from "react";

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            text: '',
        }
    }
    hendleChange = e =>{
        this.setState({text: e.target.value})
    }
    render(){
        const {text} = this.state;
        return(
            <form 
                className="form"
                onSubmit={e =>{
                e.preventDefault();
                this.props.onAdd(text);
                this.setState({text: ''});
            }}>
                <input className="formInput" type="text" value={text} onChange={this.hendleChange}/>
                <button className="formBtn">Add</button>
            </form>
        )
    }
}
export default TodoForm;