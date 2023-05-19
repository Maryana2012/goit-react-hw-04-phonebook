import { nanoid } from "nanoid";
import { Component } from "react";
import css from '../Form/Form.module.css'
export default class Form extends Component {
     state = {
      contacts: [],
      name: '',
      number: ''
  }

  handleChange = (e) => {   
      this.setState({
      [e.currentTarget.name]: e.currentTarget.value
      })  
   }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.contacts.some(contact => contact.name === this.state.name)) {
      alert(`is already in contacts`)
      this.reset();
    } else 
       {   const user = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number
      }
      
      this.setState(prevState =>({ contacts: [...prevState.contacts, user] }))
      this.props.onSubmit(user)
      this.reset()
    }
  } 

  reset = () => {
    this.setState({name:'',number:''})
  }

 
  render() {
    const {name, number} =this.state;
    return (
      <form  className={css.form__container} onSubmit={this.handleSubmit}>
          <label htmlFor="" className={css.label}> Name</label>
          <input className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
           
          />
            
        <label htmlFor="" className={css.label}>Number </label>
        <input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}/>
       
    
          <button type="submit">Add contact</button>
      </form>

    )
  }  
   
    
} 