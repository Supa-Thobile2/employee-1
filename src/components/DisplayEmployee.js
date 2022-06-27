import React from "react";
import '../css/DisplayEmployee.css'

function DisplayEmployee(props){
    return(
        <div className="tafula">
            {props.list.map((firstName)=>(

                <div>
                    <table>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                         </tr>

                    <tr>
                        <td>{firstName.firstName}</td>
                        <td>{firstName.lastName}</td>
                        <td>{firstName.email}</td>
                        <td></td>
                    </tr>

                    </table>
                </div>
            ))}
        </div>
    )
}

export default DisplayEmployee