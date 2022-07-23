import { useEffect, useState } from "react";

const useFruits = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const url = `https://shielded-oasis-06280.herokuapp.com/fruits`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data));
    }, []);

    return [fruits, setFruits];
}
export default useFruits;