import css from './ContactList.module.css';

export const ContactItem = ({id, name, number, onDelete}) =>{
    return (
        <li className={css.item}>
        <span>
          {name}: {number}
        </span>
        <button className={css.btn} type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li> 
    )
}