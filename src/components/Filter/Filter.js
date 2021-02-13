import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import styles from './Filter.module.css'

export default function Filter({ contacts, value, filter }) {
    return (
        <CSSTransition
            in={contacts.length > 1}
            timeout={250}
            unmountOnExit
            classNames={{
                enter: styles.FilterFadeEnter,
                enterActive: styles.FilterFadeEnterActive,
                exit: styles.FilterFadeExit,
                exitActive: styles.FilterFadeExitActive,
            }}
        >
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
        </CSSTransition>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filter: PropTypes.func.isRequired,
}
