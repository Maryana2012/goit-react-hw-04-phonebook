import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css'
export default function Filter(props){
    const { value, onChange } = props; 
    return( <label htmlFor="" className={css.label}>Find contact by name
            <input type="text" className={css.input}
                value={value}
                onChange={onChange}/>
            </label>
    )
}
          
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}