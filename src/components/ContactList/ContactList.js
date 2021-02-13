import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ContactList.module.css'

export default function ContactList({ contacts, deleteContact }) {
    return (
        <div className={styles.Container}>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id} className={styles.Contact}>
                        <span className={styles.ContactInfo}>
                            {contact.name} : {contact.number}
                        </span>
                        <button
                            type="button"
                            onClick={() => deleteContact(contact.id)}
                            className={styles.DeleteBtn}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}
