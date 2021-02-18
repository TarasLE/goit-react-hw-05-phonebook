import React, { Component } from 'react'
import styles from './Notification.module.css'
import PropTypes from 'prop-types'

Notification.propTypes = {
    sameContact: PropTypes.string.isRequired,
}

function Notification({ sameContact }) {
    return (
        <div className={styles.Notification}>
            <h2>{sameContact} is already in contacts</h2>
            <h3>Please check name and try again</h3>
        </div>
    )
}

export default Notification
