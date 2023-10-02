import React,{useState,useEffect} from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses"
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route,Link  } from "react-router-dom";

let DUMMY_EXPENSES=[
    {
        id:'e1',
        title:'School Fees',
        amount:178,
        date:new Date(2023,6,12)
    },
    {
        id:'e2',
        title:'House Rent ',
        amount:1908,
        date:new Date(2023,7,12)
    },
    {
        id:'e3',
        title:'Books',
        amount:978,
        date:new Date(2023,9,12)
    },
    {
        id:'e4',
        title:'Food',
        amount:778,
        date:new Date(2023,11,12)
    }
];

const App=()=>{    //Arrow Function
   
   const [expenses,setExp]=useState(DUMMY_EXPENSES);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(
        response=>{
            return response.json();
        }
       ).then(
        data=>{
            console.log(data)
            //setExp(data);
        }
       );
},[]);
  
//const addExpenseHandler_Post=(expense)=>{
  //  fetch('https://jsonplaceholder.typicode.com/todos',{
    //    method:'POST',
      //  body:JSON.stringify(expense),
        //headers:{
          //  'content-Type': 'application/json'
       // }
   // }).then(
//    response=>{
//  
//}
  // );
//};
    const addExpenseHandler=(expense)=>{
        const updateExpenses=[expense,...expenses];
        setExp(updateExpenses);
    };
    //let expenseDate=new Date(2023,3,28);
    //let expenseTitle="School Fees";
    //let expenseAmount=800;
   return(
    <div>
        <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="about">About</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
       <NewExpenses onAddExpense={addExpenseHandler} />
        <Expenses item={expenses} />

    </div> 
    );
}

export default App;