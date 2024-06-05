import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import CounterContainer from './components/CounterContainer';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

import './App.css';

const App = () => {
    return (
        <div className="container">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Header title="Simple counter" />
                <CounterContainer />
            </ThemeProvider>
        </div>
    );
};

export default App;
