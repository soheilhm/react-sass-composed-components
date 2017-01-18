import React from 'react';
import { Button, InputCard } from '@btag/bt-ui-library/';

class  AddTodoForm  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    this.setState({
      input: e.currentTarget.value
    });
  }

  handleSubmit(){
    this.props.onSubmit(this.state.input);
  }

  render() {
    return (
      <div>
        <div style={{textAlign: 'center', backgroundColor: '#ffedd1'}}>
          <h3><b>Todo App</b><br /><em>using @bt-ui-library and @undoRedo</em></h3>
        </div>
        <InputCard onChange={this.handleInputChange} placeholder="Enter New Task Here..."/>
        <Button type="quiet" onClick={this.handleSubmit}>Click to Add Task</Button>
      </div>
    );
  }
}
export default AddTodoForm
