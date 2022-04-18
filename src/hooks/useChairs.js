import axios from "axios";
import { useEffect, useState } from "react"

const useChairs = () => {
    const [chairs, setChairs] = useState([]);

    useEffect(() => {
        axios.get('products.json')
            .then(data => setChairs(data.data))
    }, [])

    return [chairs, setChairs];
}

export default useChairs;