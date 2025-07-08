import { useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import employeesData from '../../src/data/employees.json'


function Employees() {
  const [employees, setEmployees] = useState(employeesData.slice());
  const idRef = useRef();
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const avatarRef = useRef();

  // TODO: Load data from backend service
    // useEffect(() => {
  //   fetch("https://reqres.in/api/users")
  //   .then(res => res.JSON())
  //   .then(json => setEmployees(json.results))
  // }, [])

  
  const addEmployee = () => {
    // TODO: Add validations
   if(idRef.current.value === ""){
    alert("Please insert id number");
    return;
   }
   if(emailRef.current.value === ""){
    alert("Please insert email");
    return;
   }
   if(firstNameRef.current.value === ""){
    alert("Please insert firstname");
    return;
   }
   if(lastNameRef.current.value === ""){
    alert("Please insert lastname");
    return;
   }
   if(avatarRef.current.value === ""){
    alert("Please insert Avatar URL");
    return;
   }
    // TODO: Add an employee to the table
    employees.push({
      "id": idRef.current.value,
      "email": emailRef.current.value,
      "first_name": firstNameRef.current.value,
      "last_name": lastNameRef.current.value,
      "avatar": avatarRef.current.value
    });
   setEmployees( employees.slice());
   idRef.current.value = '';
   emailRef.current.value = '';
   firstNameRef.current.value = '';
   lastNameRef.current.value = '';
   avatarRef.current.value = '';
  }

  const deleteEmployee = (index) => {
    // TODO: Delete an employee from the table
    employees.splice(index,1);
    setEmployees(employees.slice());
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Email</th>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {/* <tr>
          <td>123</td>
          <td>Added name 1</td>
          <td>email@email.com</td>
          <td><Button type="button" variant="danger">Delete</Button></td>
        </tr> */}
        {/* <tr>
          <td>124</td>
          <td>Added name 2</td>
          <td>email2@email.com</td>
          <td><Button type="button" variant="danger">Delete</Button></td>
        </tr> */}
        {employees.map((person, index) =>
          <tr key={person.id}>
            <td><b>{person.id}</b></td>
            <td>{person.email}</td>
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td><img className="avatar-img" src={person.avatar} alt="" /></td>
            <td><Button onClick={() => deleteEmployee(index)} type="button" variant="danger">Delete</Button></td>

            {/* <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person}</td>
            <td>{person}</td> */}
          </tr>
        )}
         <tr className="input-row">
          <td><input ref={idRef} type="text" placeholder="ID" className="form-control"/></td>
          <td><input ref={emailRef} type="text" placeholder="Email" className="form-control"/></td>
          <td><input ref={firstNameRef} type="text" placeholder="FirstName" className="form-control"/></td>
          <td><input ref={lastNameRef} type="text" placeholder="LastName" className="form-control"/></td>
          <td><input ref={avatarRef} type="text" placeholder="Avatar" className="form-control"/></td>
          <td><Button onClick={addEmployee} type="submit" variant="success">Add</Button></td>
        </tr>
        </tbody>
      </Table>
    </div>

  </div>)
}

export default Employees;