

import './App.css';
import React, {useState} from 'react';
import AddEmployee from './components/addEmployee';
import DisplayEmployee from './components/DisplayEmployee';


function App() {

  const [employee, setEmployee] = useState([])

  const addEmployee = ((firstName, lastName, email)=>{

    setEmployee((firstName)=>[...firstName,{
      firstName : firstName,
      lastName : lastName,
      email : email
    }]);

    console.log(employee)
  })
  return (
    <div className="container">
           <AddEmployee add={addEmployee}/>
          <DisplayEmployee list={employee}/>
    </div>
 
  );
}

export default App;
