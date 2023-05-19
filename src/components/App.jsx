import React from "react";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from '../components/App.module.css'

export default class PhoneBook extends React.Component {
     state = {
       contacts: [],
       filter: ''
  }
  
handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  
deleteContacts = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=> contact.id!==id)
    }
  ))
  }
  
 FormHandlerSubmit = (data) => {
    this.setState(prevState =>
    ({ contacts: [...prevState.contacts, data]}))
  }
  
  changeFilter=(e)=> {
    this.setState({filter: e.currentTarget.value})
  }
  
  render() {
    const {contacts, filter}  = this.state
    const visibleContacts =contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
    return (<div>
      <h1 className={css.title}> PhoneBook</h1>
      <Form onSubmit={this.FormHandlerSubmit}
            contacts={ contacts} />
      <div className={css.container}>
         <h2 className={css.subtitle}>Contacts</h2>
      <Filter value={filter}
         onChange={this.changeFilter} />
      <ContactList contacts={visibleContacts}
        filter={filter}
        onDeleteContacts={this.deleteContacts} />  
      </div>
     
     
    </div>)
            
  }  
   
    
} 



