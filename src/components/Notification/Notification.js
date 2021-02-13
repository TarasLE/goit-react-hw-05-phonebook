import React, { Component } from 'react'
import styles from './Notification.module.css'
import PropTypes from 'prop-types'

Notification.propTypes = {
    alertstate: PropTypes.func.isRequired,
    sameContact: PropTypes.string.isRequired,
}

function Notification({ alertstate, sameContact }) {
    return (
        <div className={styles.Notification}>
            <h2>{sameContact} is already in contacts</h2>
            <h3>Please check name and try again</h3>
            <button
                type="button"
                onClick={alertstate}
                className={styles.FormBtn}
            >
                Close Notification
            </button>
        </div>
    )
}

export default Notification
