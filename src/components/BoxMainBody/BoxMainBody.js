import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoxMainBody.module.css';

const BoxMainBody = ({ ...props }) => {
    return (
        <div className={styles.BoxMainBody} data-testid="BoxMainBody">
            {props.children}
        </div>
    );
};
BoxMainBody.propTypes = {
    children: PropTypes.any
};

BoxMainBody.defaultProps = {};

export default BoxMainBody;
