import React from "react";
import ReactDOM from 'react-dom';
import './css/style.css';
import { Input, ButtonInput, FormControls, ListGroup, ListGroupItem, Label } from 'react-bootstrap';
import Nav from './NavBar';
import Enums from './CommonEnums';

export default class TodoItem extends React.Component {
  constructor(props) {
  	super(props);
    this.state = { 
      todoItem: {
        id: 0,
        value: '',
        item: [],
        keyCode: 0
      }
    };

    this.increment = this.increment.bind(this);
  }

  validationState() {
    let length = this.state.todoItem.value.length;
    if (Enums.keyCodeEnter) return 'success';
  }

  handleChange() {
    let input = this.refs.input.getValue();
    this.setState({
      value: input 
    });
  }

  add(item) {
   let newItem = this.state.item.slice();
   newItem.push(item);
   this.setState({ item: newItem })
  }

  save(event) {
    let input = this.refs.input.getValue();
    if (input && event.keyCode === Enums.keyCodeEnter) {
      this.add(input);
    }
    console.log(this.state.id);
  }

  increment() {
    this.state.id = this.state.id + 1;
  }

  delete(todoItem) {
    var i = this.state.item.indexOf(0);
    console.log(this.state.item);
    if(i != -1) {
      this.state.item.splice(i, 1);
    }
    console.log(this.state.item);
  }

   render() {
    let items = this.state.item;
    return (
      <div>
       <Nav />
       <ListGroup>
         {items && items.map(item => 
          <ListGroupItem key={this.increment()} onClick={this.delete.bind(this)}>
            <Label bsStyle="primary">
              {item}
            </Label>
          </ListGroupItem>)}
       </ListGroup>
       <Input
        type="text"
        value={this.state.value}
        placeholder="Enter text"
        bsStyle={this.validationState()}
        hasFeedback
        ref="input"
        groupClassName="group-class"
        labelClassName="label-class"
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.save.bind(this)}>
        </Input>
      </div>
    )
   };
}

 propTypes: {
    children: React.PropTypes.element.isRequired
 }

ReactDOM.render(<TodoItem />, document.getElementById('app'));
