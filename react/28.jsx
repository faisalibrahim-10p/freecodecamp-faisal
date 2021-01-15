class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // Change code below this line
      this.handleChange = this.handleChange.bind(this);
      // Change code above this line
    }
    // Change code below this line
    handleChange(event){
      const ev = event.target.value;
      this.setState((state)=>({
        input: ev
      }));
    }
    // Change code above this line
    render() {
      return (
        <div>
          { /* Change code below this line */}
          <input value ={this.state.input} onChange = {this.handleChange}></input>
          { /* Change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };