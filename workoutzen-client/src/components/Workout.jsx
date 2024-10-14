import { Box } from "@mui/material"
import ExercisesMenu from "./ExercisesMenu"
import Exercises from "./Exercises"
import { useState,useEffect } from "react"
import { fetchExercises } from "../Services/fetchDataMethods"

const Workout = () => {
    const [bodyPart,setBodyPart] = useState('all');
    const [equipment, setEquipment] = useState('all');
    const [exercises,setExercises] = useState([]);
    const [filteredExercises,setFilteredExercises] = useState([]);
    useEffect(()=> {
        const fetchExercisesData = async () => {
            const data = await fetchExercises('all');
            console.log(data);
            setExercises(data);
        }
        fetchExercisesData();
    },[]);
    return(
        <Box>
            <ExercisesMenu
                bodyPart = {bodyPart} 
                setBodyPart = {setBodyPart}
                exercises = {exercises}
                equipment={equipment} // Pass equipment state
                setEquipment={setEquipment}
                setFilteredExercises = {setFilteredExercises}
            />
            <Exercises
                bodyPart = {bodyPart} 
                equipment={equipment} // Pass equipment state
                filteredExercises = {filteredExercises}
                setFilteredExercises = {setFilteredExercises}
            />
        </Box>
    )
}
export default Workout;
