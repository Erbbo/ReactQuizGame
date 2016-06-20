import React, {PropTypes} from "react";
import ReactDOM from 'react-dom';
import Enums from './CommonEnums';
import './css/style.css';
import Nav from './NavBar';
import { ListGroup, ListGroupItem, Label, Button } from 'react-bootstrap';
import { Input, ButtonInput, FormControls } from 'react-bootstrap';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      value: '',
      keyCode: 0,
      isEdit: false,
      editIndex: -1,
      items: []
    }

    this.increment = this.increment.bind(this);
  }

  increment(id) {
    return id += 1;
  }

  handleChange() {
    let input = this.refs.input.getValue();
    this.setState({
      value: input 
    });
  }

  add(item) {
    if (!this.state.isEdit) {
     let newItem = this.state.items.slice();
     newItem.push(item);
     this.setState({ items: newItem })
    } else {
      let newArr = this.state.items;
      if (this.state.index != -1) {
        newArr[this.state.editIndex] = item;
        this.setState({ 
          items: newArr,
          isEdit: false
        });
      }
    }
  }

  remove(index) {
    let newArr = [];
    for (let i = 0; i < this.state.items.length; i++) {
      if (i != index) {
        newArr.push(this.state.items[i]);
      }
    }
    this.setState({
      items: newArr
    });
  }

  save(event) {
    console.log()
    let input = this.refs.input.getValue();
    if (input && event.keyCode === Enums.keyCodeEnter) {
      this.add(input);
    }
  }

  edit(index, item) {
    this.setState({ 
      isEdit: true,
      editIndex: index,
      value: item
    });
  }

 render() {
    let items = this.state.items;
    return (
      <div>
        <Nav />
         <ListGroup>
           {items && items.map(item => 
            <ListGroupItem key={items.indexOf(item)}>
                <h1 bsStyle="info">
                  {item + '    '}
                  <Button 
                    bsStyle="danger" 
                    bsSize="small" 
                    onClick={this.remove.bind(this, items.indexOf(item))}>
                      Delete
                  </Button>
                  <Button
                    bsStyle="info"
                    bsSize="small"
                    onClick={this.edit.bind(this, items.indexOf(item), item)}>
                      Edit
                  </Button>
                </h1>
            </ListGroupItem>)}
         </ListGroup>
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
      </div>);
  }
}

ReactDOM.render(<TodoList />, document.getElementById('app'));

TodoList.propTypes = {
  items: React.PropTypes.array
}
