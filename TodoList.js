import React, {PropTypes} from "react";
import { ListGroup, ListGroupItem, Label, Button } from 'react-bootstrap';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.increment = this.increment.bind(this);
  }

   increment(id) {
    return id += 1;
  }

  remove(item) {
    this.state = this.props.items;
    let newItemArr = this.state.splice(item, 1);
    this.setState({
      items: newItemArr
    });
  }

  edit(item) {
    // console.log(item);
    this.state = this.props.items;
    let newArr = this.state;
    let index = newArr.indexOf(item);
    newArr[index] = 'works!!';
    this.setState({
      items: newArr
    });
    /*let newItemArr = this.state.splice(item, 1);
    console.log(newItemArr);
    this.setState({
      items: newItemArr
    });*/
  }

 render() {
    let items = this.props.items;
    return (
      <div>
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
                  onClick={this.edit.bind(this, item)}>
                    Edit
                </Button>
              </h1>
          </ListGroupItem>)}
       </ListGroup>
      </div>);
  }
}

TodoList.propTypes = {
  items: React.PropTypes.array
}
