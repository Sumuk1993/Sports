///1.import area
import React from "react";
import ReactDOM from "react-dom/client";

//2.there are define 2 types of components
//1.functional components definition
function A(props) {
  let fname = "M.S";
  //every fuction return somthing
  return (
    <span>
      {fname} {props.lname}, <B surname="Kohli" />
    </span>
  );
}

//2.class components definition
/* class child extends parent{
  1.properties/var

  2.constructor

  3.method/fuction
}
*/
class B extends React.Component {
  //1.properties
  name = "Virat";
  // 2.constructor
  constructor() {
    super();
    this.address = "Bharath";
  }
  //3.method/fuction
  render() {
    //every function return something
    return (
      <span>
        {this.name} {this.props.surname}, <C>Dravid</C> from {this.address}
      </span>
    );
  }
}

//3.fuction definition with fatt arrow
let C = props => {
  console.log("Hi", props);
  //every fuction return something
  return (
    <span>
      {props.children} <D />
    </span>
  );
};

//functional components definition
function D() {
  let first = "M.S Dhoni";
  let gh = "Kohli";
  //every function return smething
  return (
    <div>
      <span>
        ODI:- {first} <E three={gh} />
      </span>
    </div>
  );
}
//function definition with fatt arrow
const E = props => {
  const second = "Virat";
  //every function return something
  return (
    <span>
      <div>
        TTwenty:- {second} {props.three} <F/>
      </div>
    </span>
  );
};
class F extends React.Component {
  //properties
  name = "Virendra";
  
  //constructor
  constructor(){
    super();
    this.uname="Sehwag";
  }

  //method
  render() {
    //evrey function return somthing
    return <div><span>TestMatch:- {this.name} {this.uname}, <G>Hardik</G></span></div>;
  }
}

function G(props){
  const sname="Pandya";
console.log("Hellow",props);
  //every function return something
  return <span>{props.children} {sname} <H llname="Singh"/></span>
}
const H=(props)=>{
  let ssname="Harbhajan"
  //every function return something
  return <div><span>{ssname}</span> {props.llname}, <I/></div>
}
//class component definition
class I extends React.Component{
  //1.properties
  fname="Gautam";
  //2.constructor
  constructor(){
    super();
    this.mname="Gambhir";
  }
  //3.method
  render(){
    //every function return something
    return <span>{this.fname} {this.mname}<J>Bumrah</J></span>
  }
}
//functional component 
function J(props){
  console.log("How r u",props);
//every function return somthing
return <diV><span>{props.children}</span></diV>
}


const root = ReactDOM.createRoot(document.querySelector("div.Sports"));
let abc = "Dhoni";
root.render(
  <h1>
    Indian Cricket Members are <A lname={abc} />
  </h1>
);

//export area
