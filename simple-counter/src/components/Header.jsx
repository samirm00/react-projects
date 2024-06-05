import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <Typography
            sx={{ textTransform: 'uppercase' }}
            variant="h4"
            component="header"
            gutterBottom
        >
            {title}
        </Typography>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
