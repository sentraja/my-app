import React from 'react';

// created a fucntional component with JSX elemnts and hence we import the react as line no: 1
// Here we didn't import component in first line, since we didnt use the class that extends the component
const persons = (props) => {
    // return  <p> I am a person and I am {Math.floor(Math.random()* 30)} years old</p>

    return (
        <div>
            <p> I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )

};

export default persons


// Creating a functional component.