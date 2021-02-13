import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import styles from './ContactList.module.css'
import './ContactList.css'

export default function ContactList({ contacts, deleteContact }) {
    return (
        <div className={styles.Container}>
            <TransitionGroup component="ul" classNames={styles.ListContainer}>
                {contacts.map((contact) => (
                    <CSSTransition
                        timeout={250}
                        classNames="ContactList-item-fade"
                        // classNames={styles.ContactListItemFade}
                        key={contact.id}
                    >
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
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}
