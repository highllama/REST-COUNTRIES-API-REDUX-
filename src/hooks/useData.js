import {useEffect, useState} from 'react'

const useData = (URL = '/') => {

    const [initialData, setInitialData] = useState([])
    const BASE_URL = 'https://restcountries.eu/rest/v2'
    useEffect(() => {
        fetch(`${BASE_URL}${URL}`)
        .then(res => res.json())
        .then(data => setInitialData(data))

    }, [])

    return initialData
}

export default useData