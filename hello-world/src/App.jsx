import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

import './App.css';

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Typography variant="h2">Hello, World!</Typography>
        </ThemeProvider>
    );
};

export default App;
