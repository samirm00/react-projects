import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';

import Form from './components/Form';
import Users from './components/Users';

import './App.css';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

const App = () => {
    const [users, setUsers] = useState([]);

    const addUserHandler = (userData) => {
        setUsers((prevUsers) => [userData, ...prevUsers]);
    };
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Form addUserHandler={addUserHandler} />
            <Users users={users} />
        </ThemeProvider>
    );
};

export default App;
