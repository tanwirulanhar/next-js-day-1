import { useState, useEffect } from "react";
import axios from "axios";
import { headers } from "next/headers";

export default function Homepage() {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        
        const getData = async () => {
            setLoading(true);
            const resp = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods",{
                headers: {apikey: "w05KkI9AWhKxzvPFtXotUva-"},
            });
            setFoods(resp?.data?.data);
            setLoading(false);

        };

        getData();
    }, []);
}