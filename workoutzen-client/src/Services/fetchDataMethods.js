import fetchData from "./fetchData";

const options = {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	port: null,
	path: '/exercises?limit=0&offset=0',
	headers: {
		'x-rapidapi-key': '67450ffdc7msh5dfb06c235df2e5p15a9d3jsn38f4a6d046c9',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchBodyParts = async() => {
    const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options);
    return data;
}
export const fetchExercises = async (bodyPart) => {
	const url = bodyPart === 'all' ? 'https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0':`
https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=0&offset=0`
	const data = await fetchData(url,options);
	return data;
}

export const fetchExercisesByName = async(name) => {
	const data = fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${name}`,options);
	return data;
}

export const fetchEquipment = async() => {
	const data = fetchData('https://exercisedb.p.rapidapi.com/exercises/equipmentList',options);
	return data;
}

export const fetchEquipmentExercises = async(equipment) => {
	console.log(equipment);
	const url = equipment === 'all' ? 'https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0':
	`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}?limit=10&offset=0`;
	const data = fetchData(url,options);
	return data;
}
