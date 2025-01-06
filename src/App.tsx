import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCustomer, deleteCustomer, updateCustomer } from "./CustomerSlice";

function App() {
    const customer = useSelector((state: any) => state.customer);
    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [deleteEmail, setDeleteEmail] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    const [foundCustomer, setFoundCustomer] = useState<any | null>(null);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');

    function handleSubmit() {
        dispatch(addCustomer({ firstname, email, phone }));
        setFirstname('');
        setEmail('');
        setPhone('');
    }

    const handleDelete = () => {
        if (!deleteEmail) {
            alert('Please enter an email to delete.');
            return;
        }
        dispatch(deleteCustomer(deleteEmail));
        setDeleteEmail('');
    };

    function searchCustomer() {
        const found = customer.find((c: any) => c.email === searchEmail);
        if (found) {
            setFoundCustomer(found);
            setNewName(found.firstname);
            setNewPhone(found.phone);
        } else {
            alert('Customer not found.');
            setFoundCustomer(null);
        }
    }

    function handleUpdateCustomer() {
        if (foundCustomer) {
            dispatch(updateCustomer({ email: foundCustomer.email, newName, newPhone }));
            alert('Customer updated successfully.');
            setFoundCustomer(null);
            setNewName('');
            setNewPhone('');
            setSearchEmail('');
        } else {
            alert('No customer selected for update.');
        }
    }

    return (
        <>
            <h3>Customer Details</h3>

            <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <br />

            <input type="text" placeholder="Enter the email" value={deleteEmail} onChange={(e) => setDeleteEmail(e.target.value)}/>
            <br />
            <button onClick={handleDelete}>Delete</button>

            <ul>
                {customer.map((cust: any, index: number) => (
                    <li key={index}>
                        {cust.firstname}, {cust.email}, {cust.phone}
                    </li>
                ))}
            </ul>

            <input type="text" placeholder="Email to search" value={searchEmail} onChange={(e) => setSearchEmail(e.target.value)}/>
            <button onClick={searchCustomer}>Search Customer</button>
            <br />

            {foundCustomer && (
                <div>
                    <h3>Update Customer:</h3>
                    <p>
                        <strong>Current Name:</strong> {foundCustomer.firstname}
                        <br />
                        <strong>Current Phone:</strong> {foundCustomer.phone}
                    </p>
                    <input type="text" placeholder="New Name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                    <input type="text" placeholder="New Phone" value={newPhone} onChange={(e) => setNewPhone(e.target.value)}/>
                    <button onClick={handleUpdateCustomer}>Update Customer</button>
                </div>
            )}
        </>
    );
}

export default App;
