
import React, { Component }  from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import  './App.css';
import Scroll from '../component/Scroll';





class App extends Component{
  
  constructor(){
    super();
    this.state={
      robots : [] ,
      searchField : ''

      
    }
  }

  onSearchChange = (event) =>
  {
    this.setState({searchField : event.target.value})
    //console.log(event)
    
   
  }
  // onSearchChange= (event) =>
  // {
  //   console.log(event.target.value);
  // }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots : users}))
  }

    
     
    render()
    {
      const { robots,searchField } = this.state;
      const filteredRobots= robots.filter(robot =>
        {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
      console.log(robots)
      return(
      <div className='tc'>
        <h1 className='f2'>Robotfriends</h1>
         <SearchBox onSearchChange={this.onSearchChange}
         />
           <Scroll>
           <CardList robot={filteredRobots}/>
           </Scroll>
         </div>
       );
      }
   
    
  
 
}




export default App;
