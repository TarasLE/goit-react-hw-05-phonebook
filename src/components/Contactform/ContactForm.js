import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ContactForm.module.css'
import shortid from 'shortid'
// import { Notification } from 'react-pnotify'

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
                    contact.name.toLowerCase() === this.state.name.toLowerCase()
                )
            })
        ) {
            this.setState({ alert: true })
            return true
        }
    }

    clearInput = () => {
        this.setState({ name: '', number: '' })
    }

    alertState = () => {
        this.setState({ alert: false })
    }

    render() {
        const sameContact = this.state.name
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
                {this.state.alert && (
                    <div className={styles.Notification}>
                        <h2>{sameContact} is already in contacts</h2>
                        <h3>Please check name and try again</h3>
                        <button
                            type="button"
                            onClick={this.alertState}
                            className={styles.FormBtn}
                        >
                            Close Notification
                        </button>
                    </div>
                )}
            </div>
        )
    }
}
