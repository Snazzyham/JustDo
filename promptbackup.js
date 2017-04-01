<Prompt
  title="Add New Task"
  placeholder="Start typing"
  visible={ this.state.promptVisible }
  onCancel={ () => this.setState({
    promptVisible: false
  }) }
  onSubmit={ (value) => console.log(value)}/>
