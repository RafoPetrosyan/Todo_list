import {Component} from 'react';
import TodoFooter from './components/form/todoFooter';
import TodoForm from './components/form/todoForm';
import TodoList from './components/todo/todoList';


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      todos: []
    }
  }
  onAdd = (text) =>{
        this.setState({todos: [
          ...this.state.todos, 
              {
                id: Math.random(),
                text: text,
                isCompleted: false 
              }
          ]
    })
}
  onClearCompleted = () =>{
    this.setState({todos: this.state.todos.filter(todo =>{
      return !todo.isCompleted;
    })})
  }
  onDelete = (todo) =>{
    this.setState({todos: this.state.todos.filter(t =>{
      return t.id !== todo.id;
    })})
  }
  onChange = (newTodo) =>{
    this.setState({todos: this.state.todos.map(todo =>{
      return todo.id === newTodo.id ? newTodo : todo;
    })})
  }
  render(){
    const {todos} = this.state;
    return(
      <div className='app'>
        <h1>Todo List</h1>
        <TodoForm onAdd={this.onAdd}/>
        <TodoList todos={todos} onDelete={this.onDelete} onChange={this.onChange}/>
        <TodoFooter todos={todos} onClearCompleted={this.onClearCompleted}/>
      </div>
    )
  }
}

export default App;