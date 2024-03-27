import { useState, useEffect } from 'react'
import './App.css'
import ContactsUnorderedList from './ContactsUnorderedList.jsx'

function App() {
  const [contactList, setContactList] = useState([]);
  const API_BASE_URL = 'https://jsonplaceholder.typicode.com/';

  // write a function that calls the API, and updates the state variable to be the top10ContactsArr
  useEffect(() => {
    const getContacts = async() => {
      const response = await fetch(`${API_BASE_URL}users`);
      const top10ContactsArr = await response.json();
      console.log(top10ContactsArr);
      setContactList(top10ContactsArr);
    }
    getContacts();
    }, []);

  return (
    <section id='bigbox'>
      <ContactsUnorderedList contactList={contactList} title='Name'/>
      <ContactsUnorderedList contactList={contactList} title='Email'/>
      <ContactsUnorderedList contactList={contactList} title='Phone'/>
    </section>
  )
}

export default App

// components pass an OBJECT called props to each other
// regardless of incoming data type