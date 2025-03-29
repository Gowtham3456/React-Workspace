 import { Fragment } from "react";
import "./CSS/App.css";
import { OneofSample } from "./Components/OneofSample";
// import { Student } from "./Components/Student";
// import { LearnComponent } from "./Components/LearnComponent";
//import { Header } from "./Components/Header";
//import { Childcomp } from "./Components/Childcomp";
//import { ArraySample } from "./Components/ArraySample";
//import { FunctinnSample } from "./Components/FunctinnSample";
function App() {
  // const items=[
  //   {id:1,name:"item1"},
  //   {id:2,name:"item2"},
  //   {id:3,name:"item3"}
  // ];

  // const handleclick=()=>{
  //   alert("you clicked the button");
  // };
  return (
    <Fragment>
      {/* <Header /> */}

      
      {/* <Student name="Gowtham"  age={20} married={true}/>
      <Student name="sarathy"  age={24} married={false}/>
      <Student name="Simbu"  age={25} married={true}/> */}
      
      {/* 
      <Childcomp>
        <p> Thisis 1</p>
        <p> This is 2</p>
        <p> This is 3</p>

      </Childcomp> */}

      {/* <ArraySample items={items}/> */}
        {/* <div>
          <h1>This is parent</h1>
          <FunctinnSample handleclick={handleclick}/>
        </div> */}

          <OneofSample color="orange"/>

    </Fragment>
  );
}

export default App;
