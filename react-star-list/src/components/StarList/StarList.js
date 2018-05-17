import React, { Component } from 'react';



class StarList extends Component {

render() {
 return (
   <div>
     <ul>
       {this.props.taco.map(star => (<li key={star.name}>
         The star {star.name} is {star.diameter} million km in diameters</li>))}
     </ul>
   </div>
 );
}
}

export default StarList;