import { useEffect, useState } from "react";

const useColleges = () => {
    const [loading, setLoading] = useState(true)

    const [colleges,setColleges] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allColleges')
        .then(res => res.json())
        .then(data => setColleges(data))
        setLoading(false)
    },[])

    return [colleges,loading]
}



export default useColleges;
