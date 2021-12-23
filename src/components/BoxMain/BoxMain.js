import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoxMain.module.css';
import BoxMainTitle from '../BoxMainTitle/BoxMainTitle';
import BoxMainBody from '../BoxMainBody/BoxMainBody';
import BoxMainFooter from '../BoxMainFooter/BoxMainFooter';
import { Box } from '@mui/material';

const BoxMain = ({ title = 'Default Title', footer, ...props }) => {
    return (
        <div className={styles.BoxMain} data-testid="BoxMain">
            <Box sx={{ maxWidth: 'sm' }} margin="auto">
                <BoxMainTitle>{title}</BoxMainTitle>
                <BoxMainBody>{props.children}</BoxMainBody>
                <BoxMainFooter>{footer}</BoxMainFooter>
            </Box>
        </div>
    );
};

BoxMain.propTypes = {
    children: PropTypes.any,
    title: PropTypes.any,
    footer: PropTypes.any
};

BoxMain.defaultProps = {};

export default BoxMain;
