import { useEffect, useState } from "react";

const useColleges = () => {
    const [loading, setLoading] = useState(true)

    const [colleges,setColleges] = useState([])
    useEffect(() => {
        fetch('https://college-admission-server-omega.vercel.app/allColleges')
        .then(res => res.json())
        .then(data => setColleges(data))
        setLoading(false)
    },[])

    return [colleges,loading]
}



export default useColleges;
