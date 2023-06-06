import { useState } from "react";
import { toast } from 'react-toastify';

export default function useLogs() {
    const baseURL = "http://localhost:8000/api/v1";
    const [logsData, setLogsData] = useState("");

    const getLogsRequest = async() => {
        try {
            const res = await fetch(`${baseURL}/logs`, {
              headers: {"Content-Type": "application/json"},
              method: "GET",
            });
            if (!res.ok) throw new Error(`An error has occured: ${res.status} - ${res.statusText}`);
            const response = await res.json();
            const { data } = response
            if(response.status === 200) {
              setLogsData(data);
            }
            
          } catch (err) {
            toast.error(err.message, {
                position: "top-center",
                autoClose: 5000,
                });
          }
    }
    return { getLogsRequest, logsData };
}

