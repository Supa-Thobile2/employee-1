import React, {useState} from 'react'
import '../css/addEmployee.css'
function AddEmployee(props){
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');

    const add = (()=>{
        console.log(firstName)
        console.log(lastName)
        console.log(email)

        props.add(firstName,lastName,email)
    })

    let btn={
        marginTop: '20px',
        padding: '0.9%',
        backgroundColor: 'green',
        borderRadius: '5px'
    }
    return(
        <div className="form">
            <h3>New Employee</h3>
            <label type="text" >First Name:</label><br/>
            <input type="text" onChange={(e)=>setfirstName(e.target.value)}/><br/><br/>

            <label type="text" >Last Name:</label><br/>
            <input type="text" onChange={(e)=>setlastName(e.target.value)}/><br/><br/>

            <label type="text">Email:</label><br/>
            <input type="text" onChange={(e)=>setemail(e.target.value)}/><br/>


            <button style={btn} onClick={add}>Add Employee</button>



        </div>
    )
}

export default AddEmployee