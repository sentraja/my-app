import React from 'react';

// created a fucntional component with JSX elemnts and hence we import the react as line no: 1
// Here we didn't import component in first line, since we didnt use the class that extends the component
const persons = () => {
return  <p> I am a person and I am {Math.floor(Math.random()* 30)} years old</p>
};

export default persons


// Creating a functional component.