import React from 'react';
import unsplash from '../API'


import SearchBar from '../SearchBar'
import ListItem from '../ListItems'



class App extends React.Component{

  state = { images:[] }

 onSearchSubmit = async(term) => {
    const response = await unsplash.get('/search/photos',{
      params:{ query: term },

    })
    this.setState({images:response.data.results})


  }
  render(){
    return(
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ListItem items={this.state.images}/>
      </div>
    )
  }
}

export default App
