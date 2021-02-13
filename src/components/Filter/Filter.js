import React from 'react'
import PropTypes from 'prop-types'
import styles from './Filter.module.css'

export default function Filter({ value, filter }) {
    return (
        <div className={styles.Container}>
            <label className={styles.InputContainer}>
                <span className={styles.FilterHeader}>
                    Find contacts by Name
                </span>

                <input
                    type="text"
                    value={value}
                    onChange={filter}
                    className={styles.FilterInput}
                />
            </label>
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filter: PropTypes.func.isRequired,
}
