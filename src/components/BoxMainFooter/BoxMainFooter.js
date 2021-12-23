import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoxMainFooter.module.css';

const BoxMainFooter = ({ ...props }) => {
    return (
        <div className={styles.BoxMainFooter} data-testid="BoxMainFooter">
            {props.children}
        </div>
    );
};

BoxMainFooter.propTypes = {
    children: PropTypes.any
};

BoxMainFooter.defaultProps = {};

export default BoxMainFooter;
