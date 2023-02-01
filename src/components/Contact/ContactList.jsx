import PT from 'prop-types';
import css from '../Contact/ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <span>
              {name}: {number}
            </span>
            <button className={css.btn} type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PT.arrayOf(
    PT.shape({
      id: PT.string.isRequired,
      name: PT.string.isRequired,
      number: PT.string.isRequired,
    }).isRequired
  ).isRequired,

  deleteContact: PT.func.isRequired,
};
