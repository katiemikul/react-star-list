import React from 'react';



const NewStarForm = props => (
    <form onSubmit={props.handleSubmitForChild}>
        <input value={props.newStar.name} onChange={props.handleChangeForChild('name')} placeholder='Name' />
        <input value={props.newStar.diameter} onChange={props.handleChangeForChild('diameter')} placeholder='Diameter' />
        <input type="Submit" value='Add new star' />
    </form>
);


export default NewStarForm;