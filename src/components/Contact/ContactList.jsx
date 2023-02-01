import PT from 'prop-types';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
       <ContactItem key={id}
       name={name}
       number={number}
       onDelete={deleteContact}
       id={id}/>
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
