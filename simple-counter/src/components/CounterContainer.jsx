import Grid from '@mui/material/Grid';
import { useState } from 'react';

import Counter from './Counter';
import CustomButton from './CustomButton';

const CounterContainer = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const decrementHandler = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
                <Counter count={count} />
            </Grid>
            <Grid item>
                <CustomButton
                    text="Decrement"
                    color="error"
                    onClick={decrementHandler}
                />
                <CustomButton
                    text="Increment"
                    color="success"
                    onClick={incrementHandler}
                />
            </Grid>
        </Grid>
    );
};

export default CounterContainer;
