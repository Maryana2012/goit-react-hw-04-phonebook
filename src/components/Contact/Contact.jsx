import PropTypes from 'prop-types';
import css from '../Contact/Contact.module.css'
export default function Contact(props) {
    const { id, name, number, onDeleteContacts} = props;
    return (<li className={css.item}> {name}: {number}
        <button type='button' onClick={()=>{onDeleteContacts(id)}}>delete</button>
    </li>)
}
Contact.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDeleteContacts: PropTypes.func
}