import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import { useState,useEffect } from "react";
import './Styles/styles.css';
const SearchExercises = ({ exercises, setFilteredExercises}) => {
    const [search, setSearch] = useState('');
    const [input, setInput] = useState('');
    
    useEffect(() => {
        console.log('Filtering...');
        const filtered = exercises.filter((exercise) => {
            return exercise.name.toLowerCase().includes(search.toLowerCase());
        })
        setFilteredExercises(filtered);
    }, [search])
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(input);
    }

    return (
        <Stack alignItems='center' mt="37px" justifyContent="center" p="20px" width="100%">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" color="hsl(252, 99%, 71%)" textAlign="center">Awesome Exercises you<br /> should try out</Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontFamily: 'Open Sans, sans-serif',
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#fff'
                        },
                        width: { lg: '1000px', xs: '350px' },
                        backgroundColor: '#343434'
                    }}
                    height="76px"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="search-btn" onClick={(e)=>handleSearch(e)}
                    sx={{
                        bgcolor: 'hsl(252, 99%, 71%)',
                        color: 'hsl(66, 84%, 67%)',
                        textTransform: 'capitalize',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}>Search</Button>
            </Box>

        </Stack>
    )
}
export default SearchExercises;
