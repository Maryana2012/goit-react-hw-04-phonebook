import React from "react";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from '../components/App.module.css'
import { useState,useEffect } from "react";

export default function PhoneBook() {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => { 
    window.localStorage.setItem('contacts', JSON.stringify(contacts) )
  }, [contacts])
  
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
  const changeFilter = (event) => {
    setFilter(event.target.value)
  }
  const FormHandlerSubmit = (data) => {
    setContacts(prevState => [...prevState, data]);
  }
  const deleteContacts = (id) => {
    setContacts(prevState=>prevState.filter(contact => contact.id !=id))
  }
  
  return (<>
     <h1 className={css.title}> PhoneBook</h1>
     
     <Form  onSubmit={FormHandlerSubmit}
      contacts={contacts} />
    
      <div className={css.container}>
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter value={filter}
         onChange={changeFilter} />
      <ContactList contacts={visibleContacts}
        filter={filter}
        onDeleteContacts={deleteContacts} />  
      </div> 
  </>)
}





