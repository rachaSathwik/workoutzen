import { Backdrop, CircularProgress, Typography } from "@mui/material";

const SomethingError = ({ message }) => {
    return (
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={true}
        >
            <div style={{ textAlign: 'center' }}>
                <CircularProgress color="inherit" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                    {message}
                </Typography>
            </div>
        </Backdrop>
    );
}

export default SomethingError;