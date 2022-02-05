import contacts from "./contacts"; 
import Card from "./components/Card";
import React from 'react';

const App = () => {
    console.log(contacts);
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(item =>{
                return <Card name={item.name} img={item.imgURL} email={item.email} phone={item.phone}/>
            })}
        </div>
    );
}

export default App;
