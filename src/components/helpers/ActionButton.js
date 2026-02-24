import React from 'react';
import Button from 'react-bootstrap/Button';

const ActionButton = ({ Text, Class="primary", onClick, disabled }) => (
    <Button
        className={`custom-btn custom-btn-${Class}`}
        onClick={onClick}
        disabled={disabled}
    >
        {Text}
    </Button>
);

export default ActionButton;