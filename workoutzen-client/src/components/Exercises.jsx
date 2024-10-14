import { useEffect, useState } from "react";
import { fetchExercises, fetchEquipmentExercises } from "../Services/fetchDataMethods";
import { Box, Stack, Typography } from '@mui/material';
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";
import './Styles/styles.css';

const Exercises = ({ bodyPart, equipment, filteredExercises, setFilteredExercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    useEffect(() => {
        const fetchExercisesData = async() => {
            const data = await fetchExercises(bodyPart);
            console.log(data);
            setFilteredExercises(data);
        }
        fetchExercisesData();
    },[bodyPart]);

    useEffect(() => {
        const fetchExercisesData = async() => {
            const data = await fetchEquipmentExercises(equipment);
            console.log(data);
            setFilteredExercises(data);
        }
        fetchExercisesData();
    },[equipment]);

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = filteredExercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    }

    console.log("Filtered exercises:", filteredExercises);
    console.log("Current exercises:", currentExercises);

    return (
        <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
            <Typography variant="h3" className="title" mb="46px">Showing Results</Typography>
            {filteredExercises.length > 0 ? (
                <>
                    <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                        {currentExercises.map((exercise, index) => (
                            <ExerciseCard key={index} exercise={exercise} />
                        ))}
                    </Stack>
                    {filteredExercises.length > exercisesPerPage && (
                        <Stack mt="100px" alignItems="center">
                            <Pagination
                                color='standard'
                                shape="rounded"
                                defaultPage={1}
                                count={Math.ceil(filteredExercises.length / exercisesPerPage)}
                                page={currentPage}
                                onChange={paginate}
                                size="large"
                                sx={{color:'white',backgroundColor:'hsl(252, 99%, 71%)',borderRadius:'4px'}}
                            />
                        </Stack>
                    )}
                </>
            ) : (
                    <Typography variant="h3" className="subtitle" mb="46px">No exercises found. Try a different search.</Typography>
            )}
        </Box>
    )
}

export default Exercises;