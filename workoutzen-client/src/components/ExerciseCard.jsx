import { Typography, Stack, Button,Box } from "@mui/material";
import './Styles/styles.css';

const ExerciseCard = ({ exercise }) => {
    return (
        <Box className="exercise-card">
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row" mt="11px">
                <Button sx={{ml:'21px',background:'hsl(252, 99%, 71%)',color:'hsl(66, 84%, 67%)',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>{exercise.bodyPart}</Button>
                <Button sx={{ml:'21px',background:'hsl(252, 99%, 71%)',color:'hsl(66, 84%, 67%)',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>{exercise.target}</Button>
            </Stack>
            <Typography ml="21px" color="#fff" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">{exercise.name}</Typography>
        </Box>
    )
}
export default ExerciseCard;
