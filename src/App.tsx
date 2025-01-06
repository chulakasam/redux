import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addCustomer} from "./CustomerSlice";
import {Customer} from "./Customer.ts";

function App() {

    const customer = useSelector((state: any) => state.customer);
    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');



    function handleSubmit() {
        const new_customer = new Customer(firstname, email, phone);
        dispatch(addCustomer(new_customer));
    }


    return (
        <>
            <h3>Customer First Name</h3>


            <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
            <input type="text" placeholder="Email " value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>


            <br/>

            <button onClick={handleSubmit}>Submit</button>

            <br/>






            <ul>
                {customer.map((customers, index) => (
                    <li key={index}>
                        {customers.name},{customers.email},{customers.phone}
                    </li>
                ))}
            </ul>










        </>
    );
}

export default App;
