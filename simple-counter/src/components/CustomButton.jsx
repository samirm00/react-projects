import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ text, color, onClick }) => {
    return (
        <Button
            sx={{ margin: '0px 10px' }}
            color={color}
            variant="contained"
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CustomButton;
