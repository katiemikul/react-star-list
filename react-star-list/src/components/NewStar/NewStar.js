import React, { Component } from 'react';


class NewStar extends Component {
render() {
 // const starListItemArray = this.state.starList.map(star => (<li key={star}>{star}</li>));
 return (
   <div>
     <p> New star is {this.props.currentStar.name} and has a diameter of {this.props.currentStar.diameter}</p>
    
   </div>
 );
}
}

export default NewStar;