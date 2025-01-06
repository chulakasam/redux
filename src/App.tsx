import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCustomer, deleteCustomer, updateCustomer } from "./CustomerSlice";
import {addItem, deleteSingleItem, updateItem} from "./ItemSlice.ts";

function App() {
    // --------------------------------customer --------------------------------------------------------
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
    // -------------------------item-------------------------------------------

    const item = useSelector((state: any) => state.item);
    const [itemname, setItemname] = useState('');
    const [itemprice, setItemPrice] = useState('');
    const [itemqty, setQty] = useState('');

    const [deleteItem,setDeleteItem] = useState('');
    const [searchItemName, setSearchItemName] = useState('');
    const [foundItem, setFoundItem] = useState<any | null>(null);
    const [newItemQty, setNewItemQty] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');

    function handleItemSubmit(){
        dispatch(addItem({itemname, itemprice, itemqty}));
        setItemname('');
        setItemPrice('');
        setQty('');
    }
    function handleItemDelete(){
        if (!deleteItem) {
            alert('Please enter an item name to delete.');
            return;
        }
        dispatch(deleteSingleItem(deleteItem));
        setDeleteEmail('');
    }

    function searchItem() {
        const foundItem = item.find((c: any) => c.itemname === searchItemName);
        if (foundItem) {
            setFoundItem(foundItem);
            setNewItemQty(foundItem.itemqty);
            setNewItemPrice(foundItem.itemprice);
        } else {
            alert('Item not foundItem.');
            setFoundItem(null);
        }
    }

    function handleUpdateItem() {
        if (foundItem) {
            dispatch(updateItem({ itemname: foundItem.itemname, newItemQty, newItemPrice }));
            alert('Item updated successfully.');
            setFoundItem(null);
            setNewItemQty('');
            setNewItemPrice('');
            setSearchItemName('');
        } else {
            alert('No Item selected for update.');
        }
    }

    return (
        <>
            {/*-------------------customer------------------------*/}
            <h3>Customer Details</h3>

            <input type="text" placeholder="First Name" value={firstname}
                   onChange={(e) => setFirstname(e.target.value)}/>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
            <br/>

            <input type="text" placeholder="Enter the email" value={deleteEmail}
                   onChange={(e) => setDeleteEmail(e.target.value)}/>
            <br/>
            <button onClick={handleDelete}>Delete</button>

            <ul>
                {customer.map((cust: any, index: number) => (
                    <li key={index}>
                        {cust.firstname}, {cust.email}, {cust.phone}
                    </li>
                ))}
            </ul>

            <input type="text" placeholder="Email to search" value={searchEmail}
                   onChange={(e) => setSearchEmail(e.target.value)}/>
            <button onClick={searchCustomer}>Search Customer</button>
            <br/>

            {foundCustomer && (
                <div>
                    <h3>Update Customer:</h3>
                    <p>
                        <strong>Current Name:</strong> {foundCustomer.firstname}
                        <br/>
                        <strong>Current Phone:</strong> {foundCustomer.phone}
                    </p>
                    <input type="text" placeholder="New Name" value={newName}
                           onChange={(e) => setNewName(e.target.value)}/>
                    <input type="text" placeholder="New Phone" value={newPhone}
                           onChange={(e) => setNewPhone(e.target.value)}/>
                    <button onClick={handleUpdateCustomer}>Update Customer</button>
                </div>
            )}


            {/*-----------------------item----------------------------*/}
            <h3>Item Details</h3>

            <input type="text" placeholder="Item name" value={itemname} onChange={(e) => setItemname(e.target.value)}/>
            <input type="text" placeholder="Item price" value={itemprice}
                   onChange={(e) => setItemPrice(e.target.value)}/>
            <input type="text" placeholder="Item Qty" value={itemqty} onChange={(e) => setQty(e.target.value)}/>
            <br/>
            <button onClick={handleItemSubmit}>Submit Item</button>
            <br/>

            <ul>
                {item.map((ite: any, index: number) => (
                    <li key={index}>
                        {ite.itemname}, {ite.itemprice}, {ite.itemqty}
                    </li>
                ))}
            </ul>
            <input type="text" placeholder="Enter the item name" value={deleteItem}
                   onChange={(e) => setDeleteItem(e.target.value)}/>
            <br/>
            <button onClick={handleItemDelete}>Delete</button>
            <br/>
            <input type="text" placeholder="Email to search" value={searchItemName} onChange={(e) => setSearchItemName(e.target.value)}/>
            <button onClick={searchItem}>Search Item</button>

            {foundItem && (
                <div>
                    <h3>Update Item:</h3>
                    <p>
                        <strong>Current Price:</strong> {foundItem.itemprice}
                        <br/>
                        <strong>Current Qty:</strong> {foundItem.itemqty}
                    </p>
                    <input type="text" placeholder="New price" value={newItemPrice}
                           onChange={(e) => setNewItemPrice(e.target.value)}/>
                    <input type="text" placeholder="New Qty" value={newItemQty}
                           onChange={(e) => setNewItemQty(e.target.value)}/>
                    <button onClick={handleUpdateItem}>Update Item</button>
                </div>
            )}


        </>
    );
}

export default App;
