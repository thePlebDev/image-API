import React from 'react'


class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''}

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value})
    console.log(this.state.value)
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.value)
  }

  render(){
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
