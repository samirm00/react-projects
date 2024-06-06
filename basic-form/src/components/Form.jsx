import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

const Form = ({ addUserHandler }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name,
            email
        };

        addUserHandler(userData);

        setName('');
        setEmail('');
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 4
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    CONTACT FORM
                </Typography>
                <Box
                    component="form"
                    onSubmit={(e) => handleSubmit(e)}
                    sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        width: '100%'
                    }}
                >
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

Form.propTypes = {
    addUserHandler: PropTypes.func.isRequired
};

export default Form;
