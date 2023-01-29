import {useState} from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Demo from "./Demo";
import App1 from "./App1";
// import Student from "./student";
// const Greeting = () => {
//     return <h2>My First Component</h2>;
// };

// const Greeting=()=>{
//     return React.createElement("div",{},
//     React.createElement("div",{},"My component"));
// };

// const Booktitle = () =>{
//     return (
//         <>
//         <Book/>
//         <Book/>
//         <Book/>
//         <Book/>
//         </>
//     )
// }
// const Book = () => {
//     return (
//     <>
//     <Image/>
//     <Title/>
//     <Author/>
//     </>
//     );
// }
// const Title=()=>{
//     return <h4>Title</h4>;
// };
// const Image=()=>{
//     return <h1>Image Placeholder</h1>;
// };
// const Author=()=>{
//     return <h3>Author</h3>;
// }
function App(){
    let msg="confirm";
    const handleClick = () => {
        console.log("clicked.....");
        setCount(count+1);
    };
    // const handleChange = (e) =>{
    //     console.log(e.target.value);
    // };
    const [ count, setCount] = useState(0);
    return (
        <>
            <App1 msg={msg}></App1>
            <button onClick={handleClick}>Clicked {count} times</button><br/>
            <br/>
            <button onClick={()=>setCount(count+1)}>
                Clicked {count} times
            </button>
        </>
    );
}

function App2(){
    let msg="confirm";
    const handleClick = () => {
        console.log("clicked.....");
        setCount(count+1);
    };
    const handleClick1 = () => {
        console.log("clicked.....");
        setCount1(count1+1);
    };
    const [ count1, setCount1] = useState(0);
    const [ count, setCount] = useState(0);
    
    return (
        <>
            <App1 msg={msg}></App1>
            <button onClick={handleClick}>Clicked {count} times</button><br/>
            <br/>
            <button onClick={handleClick1}>
                Clicked {count1} times
            </button>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Demo title="vfy" name="priya" />);
root.render(<App/>);
root.render(<App2/>);
// root.render(<Student S_name="mdjfhjd" S_Id="23" marks="89"/>);
export default App2;
