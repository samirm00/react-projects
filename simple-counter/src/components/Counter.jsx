import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Counter = ({ count }) => {
    return (
        <Typography sx={{ margin: '30px 0px' }} variant="h3">
            {count}
        </Typography>
    );
};

Counter.propTypes = {
    count: PropTypes.number.isRequired
};

export default Counter;
