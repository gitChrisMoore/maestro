import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoxMainTitle.module.css';
import { Typography } from '@mui/material';

const BoxMainTitle = ({ ...props }) => {
    return (
        <div className={styles.BoxMainTitle} color="primary" data-testid="BoxMainTitle">
            <Typography variant="h5" fontWeight="bold">
                {props.children}
            </Typography>
        </div>
    );
};

BoxMainTitle.propTypes = {
    children: PropTypes.any
};

BoxMainTitle.defaultProps = {};

export default BoxMainTitle;
