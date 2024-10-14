import { useState, useEffect } from 'react';
import { fetchBodyParts,fetchEquipment} from '../Services/fetchDataMethods';
import { Box, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import SearchExercises from './SearchExercises';
import './Styles/styles.css';

// Searxh Bar
// BodyParts Scroll bar
//Equipment
//Target list
const ExercisesMenu = ({ bodyPart, setBodyPart, equipment, setEquipment, exercises, setFilteredExercises}) => {
    const [bodyParts, setBodyParts] = useState([]);
    const [equipmentList, setEquipmentList] = useState([]);
    useEffect(() => {
        const getBodyParts = async () => {
            const data = await fetchBodyParts();
            console.log(data);
            setBodyParts(['all', ...data]);
        }
        const getEquipment = async () => {
            const data = await fetchEquipment();
            console.log(data);
            setEquipmentList(['all', ...data]);
        }
        getBodyParts();
        getEquipment();
    }, [])
    return (
        <div>
            <SearchExercises exercises={exercises} setFilteredExercises={setFilteredExercises} />
            <Typography 
                variant='h5' 
                className='subtitle'
                sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    color: '#4a4a4a',
                    textAlign: 'center',
                    margin: '20px 0',
                    padding: '10px',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    borderRadius: '8px',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}
            >
                Hit your target body parts!
            </Typography>
            <Box sx={{ position: 'relative', width: '100%', padding: '20px' }}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
            <Typography 
                variant='h5' 
                className='subtitle'
                sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    color: '#4a4a4a',
                    textAlign: 'center',
                    margin: '20px 0',
                    padding: '10px',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    borderRadius: '8px',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}
            >
                Crush it with the right gear!
            </Typography>
            <Box sx={{ position: 'relative', width: '100%', padding: '20px' }}>
                <HorizontalScrollBar data={equipmentList} bodyPart={equipment} setBodyPart={setEquipment} />
            </Box>
        </div>
    )
}
export default ExercisesMenu;
