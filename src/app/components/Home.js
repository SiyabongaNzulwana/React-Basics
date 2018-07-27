import React from 'react';

export class Home extends React.Component {
  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink2: "Changed Link"
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    },3000)
  }
  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    })
  }
  onChangeLink(){
    this.props.changeLink(this.state.homeLink2);
  }
  render() {
    return (
      <div>
        <p>In a new Component</p>
        <p>Your name is {this.props.name}, and your age is {this.state.age}</p>
        <p>status: {this.state.status}</p>
        <button className='btn btn-primary' onClick={() => this.onMakeOlder()}>Make me older!</button>
        <hr/>
        <button className='btn btn-primary' onClick={this.props.greet}>Greet Me!</button>
        <hr />
        <button className='btn btn-primary' onClick={this.onChangeLink.bind(this)}>Change Link Header</button>
      </div>
    )
  }
}
