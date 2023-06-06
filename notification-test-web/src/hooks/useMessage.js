import { useState } from "react";
import { toast } from 'react-toastify';

export function useMessage() {
    const baseURL = "http://localhost:8000/api/v1";
    const [categories, setCategories] = useState([]);
    const [isMessageLoading, setIsMessageLoading] = useState(false);

    const sendMessagaRequest = async(body, getLogsRequest, setFormData) => {
        try {
            setIsMessageLoading(true);
            //2 seconds of waiting added to simulate a little the request and see the loading
            await new Promise(resolve => {
              return setTimeout(resolve, 2000)
          });
            const res = await fetch(`${baseURL}/create`, {
              headers: {"Content-Type": "application/json"},
              method: "POST",
              body: JSON.stringify(body),
            });

            if (!res.ok) throw new Error(`An error has occured: ${res.status} - ${res.statusText}`);
            const data = await res.json();
            
            if(data.status === 200) {
                await getLogsRequest();
                setFormData(prevFormData =>({...prevFormData,'message': ''}));
                toast.success('The message was sent successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    });
            }
     
          } catch (err) {
            toast.error(err.message, {
                position: "top-center",
                autoClose: 5000,
                });
          } finally {
            setIsMessageLoading(false);
          }
    }


    const getCategoriesRequest = async() => {
        try {
            const res = await fetch(`${baseURL}/categories`, {
              headers: {"Content-Type": "application/json"},
              method: "GET",
            });
            if (!res.ok) throw new Error(`An error has occured: ${res.status} - ${res.statusText}`);
            const response = await res.json();
            const  {data} = response
            if(response.status === 200) {
                setCategories([...data])
            }
            
          } catch (err) {
            toast.error(err, {
                position: "top-center",
                autoClose: 5000,
                });
          }
    }
    return [sendMessagaRequest, getCategoriesRequest, categories, isMessageLoading]
}

export default useMessage;
