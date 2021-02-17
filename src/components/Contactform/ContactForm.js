import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ToastContainer, toast, Flip, Zoom, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'
import styles from './ContactForm.module.css'
import shortid from 'shortid'
import './ContactForm.css'
import Notification from '../Notification/Notification'

export default class ContactForm extends Component {
    static defaultProps = { addContact: '' }
    static propTypes = {}

    state = {
        name: '',
        number: '',
        alert: false,
    }

    handleContact = (event) => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.checkContact()) {
            return
        } else {
            const contact = {
                id: shortid.generate(),
                name: this.state.name,
                number: this.state.number,
            }
            this.props.addContact(contact)
            this.clearInput()
        }
    }
    checkContact = () => {
        if (this.props.contacts.length == 0) {
            return
        } else if (
            this.props.contacts.find((contact) => {
                return (
                    contact.name.toLowerCase() ===
                        this.state.name.toLowerCase() &&
                    contact.number.toLowerCase() ===
                        this.state.number.toLowerCase()
                )
            })
        ) {
            this.setState({ alert: true })
            this.alertState()
            return true
        }
    }

    clearInput = () => {
        this.setState({ name: '', number: '' })
    }

    alertState = () => {
        setTimeout(() => {
            this.setState({ alert: false })
        }, 2000)
    }

    render() {
        return (
            <div className={styles.Container}>
                <form>
                    <label>
                        Name <br />
                        <input
                            type="text"
                            value={this.state.name}
                            name="name"
                            onChange={this.handleContact}
                            className={styles.FormInput}
                        />
                    </label>
                    <br />
                    <label>
                        Number <br />
                        <input
                            type="text"
                            value={this.state.number}
                            name="number"
                            onChange={this.handleContact}
                            className={styles.FormInput}
                        />
                    </label>
                </form>
                <button
                    type="button"
                    onClick={this.handleSubmit}
                    className={styles.FormBtn}
                >
                    Add contact
                </button>
                <CSSTransition
                    in={this.state.alert}
                    timeout={250}
                    classNames={{
                        enter: styles.ContactFormNotificationFadeEnter,
                        enterActive:
                            styles.ContactFormNotificationFadeEnterActive,
                        exit: styles.ContactFormNotificationFadeExit,
                        exitActive:
                            styles.ContactFormNotificationFadeExitActive,
                    }}
                    unmountOnExit
                >
                    <Notification sameContact={this.state.name}></Notification>
                </CSSTransition>
            </div>
        )
    }
}
