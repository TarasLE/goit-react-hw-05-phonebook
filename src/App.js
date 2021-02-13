import React, { Component } from 'react'
import ContactForm from './components/Contactform/ContactForm'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'
import styles from './App.module.css'

export default class App extends Component {
    state = {
        contacts: [],
        filter: '',
    }
    deleteContact = (contactId) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(
                (contact) => contact.id != contactId
            ),
        }))
    }

    addContact = (contact) => {
        this.setState((prevState) => ({
            contacts: [contact, ...prevState.contacts],
        }))
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts)
            )
        }
    }

    componentDidMount() {
        const localContacts = localStorage.getItem('contacts')
        const parsedLocalContacts = JSON.parse(localContacts)
        if (parsedLocalContacts) {
            this.setState({ contacts: parsedLocalContacts })
        }
    }

    contactFilter = (event) => {
        this.setState({ filter: event.currentTarget.value })
    }

    render() {
        const normalizedFilter = this.state.filter.toLowerCase()
        const filteredElements = this.state.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        )
        return (
            <div className={styles.Container}>
                <h1>Phonebook</h1>

                <ContactForm
                    addContact={this.addContact}
                    contacts={this.state.contacts}
                />
                <h1>Contacts</h1>
                <Filter value={this.state.filter} filter={this.contactFilter} />
                <ContactList
                    contacts={filteredElements}
                    deleteContact={this.deleteContact}
                />
            </div>
        )
    }
}
