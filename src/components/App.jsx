import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Contact/ContactList';
import { Filter } from './Filter/Filter';

const LOKAL_KEY = 'contacts'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount(){
    const parsedContacts = JSON.parse(localStorage.getItem(LOKAL_KEY));
    if(parsedContacts) {
      this.setState({contacts: parsedContacts});
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts){
      localStorage.setItem(LOKAL_KEY, JSON.stringify(this.state.contacts))
    }
  }

  addContact = newContact => {
    this.setState(({ contacts }) =>
    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : { contacts: [newContact, ...contacts] }
  );
  };

  onFilter = element => {
    this.setState({ filter: element.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filterContactsList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div style={{width: '450px' , margin: '0 auto'}}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}  />

        <h2>Contacts</h2>
        <Filter value={this.filter} onFilter={this.onFilter} />
        <ContactList
          contacts={filterContactsList}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
