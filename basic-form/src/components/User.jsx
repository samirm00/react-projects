import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const User = ({ userData }) => {
    return (
        <Box
            sx={{
                p: 2,
                mb: 2,
                border: '1px solid #ccc',
                borderRadius: 2
            }}
        >
            <Typography variant="h6">{userData.name}</Typography>
            <Typography variant="body2" color="textSecondary">
                {userData.email}
            </Typography>
        </Box>
    );
};

User.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
};

export default User;
