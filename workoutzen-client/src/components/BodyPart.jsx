import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/fitness.png";
import './Styles/styles.css';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? "4px solid hsl(252, 99%, 71%)" : "none",
                // background: "#fff",
                width: "100%", // Adjust as needed
                cursor: "pointer",
                gap: "47px",
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' }); // Handle scrolling as needed
            }}
        >
            <img
                src={Icon}
                alt="exercise"
                style={{ width: "70px", height: "70px", filter: "brightness(0) invert(1)"}}
            />
            <Typography fontSize="24px" fontWeight="bold" color="#fff" fontFamily="Open Sans" textTransform="capitalize">{item}</Typography>
        </Stack>
    );
};
export default BodyPart;
