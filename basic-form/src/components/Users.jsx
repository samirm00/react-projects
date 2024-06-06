import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types';

import User from './User';

const Users = ({ users }) => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                {users.map((user, index) => (
                    <User key={index} userData={user} />
                ))}
            </Box>
        </Container>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
