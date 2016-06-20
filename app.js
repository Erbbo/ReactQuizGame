import React from "react";
import ReactDOM from 'react-dom';
import './css/style.css';
import { Input, ButtonInput, FormControls, Label } from 'react-bootstrap';
import Nav from './NavBar';
import Enums from './CommonEnums';
import TodoList from './TodoList';

export default class TodoItem extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      value: '',
      keyCode: 0,
      items: []
    }
  }

/*  validationState() {
    let length = this.state.todoItem[0].value.length;
    if (Enums.keyCodeEnter) return 'success';
  }*/

  handleChange() {
    let input = this.refs.input.getValue();
    this.setState({
      value: input 
    });
  }

  add(item) {
   let newItem = this.state.items.slice();
   newItem.push(item);
   this.setState({ items: newItem })
  }

  save(event) {
    let input = this.refs.input.getValue();
    if (input && event.keyCode === Enums.keyCodeEnter) {
      this.add(input);
    }
  }

   render() {
    let items = this.state.items;
    return (
      <div>
       <Nav />
       <TodoList items={items}/>
       <div>
        <Input
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          /* bsStyle={this.validationState()}*/
          hasFeedback
          ref="input"
          groupClassName="group-class"
          labelClassName="label-class"
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.save.bind(this)}>
        </Input>
       </div>
      </div>
    )
   };
}

 propTypes: {
    children: React.PropTypes.element.isRequired
 }

ReactDOM.render(<TodoItem />, document.getElementById('app'));
