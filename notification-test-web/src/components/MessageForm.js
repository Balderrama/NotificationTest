import { useState, useEffect } from "react";
import useMessage from "../hooks/useMessage";
import useLogs from "../hooks/useLogs";
import { toast } from 'react-toastify';
import LogsList from "./LogsList";
import Loading from "./Loading";

const DEFAULT_CATEGORY_SELECTED = "Sports";

function MessageForm() {
    const [formData, setFormData] = useState({category: DEFAULT_CATEGORY_SELECTED, message: ""})
    const [sendMessagaRequest,getCategoriesRequest, categories, isMessageLoading ] = useMessage();
    const {getLogsRequest, logsData} = useLogs();
    const {category, message} = formData;

    useEffect(()=>{
        getCategoriesRequest();
    },[])

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevFormData =>({...prevFormData,[name]: value}));
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(message === "w") {
            toast.error('Please type the message to continue', {
                position: "top-center",
                autoClose: 4000,
                });
                return;
        }

        sendMessagaRequest(formData, getLogsRequest,setFormData );
    }
    
    return (
        <section className="wrapper">
            { isMessageLoading && <Loading/> }
            <h1>Notification Test</h1>
            <form onSubmit={handleSubmit}>
                <label>Category</label>
                <select value={category} name="category" id="category" onChange={handleChange}>
                    { categories.length > 0 &&
                        categories.map(item =>{
                            return <option key={item.id}>{item.name}</option>
                        })
                    }
                </select>   
                <label htmlFor="">Message</label>
                <textarea name="message" id="message" value={message} onChange={handleChange} ></textarea>
                <button type="submit">Send</button>
            </form>
            <LogsList getLogsRequest={getLogsRequest} logsData={logsData}/>
        </section>
    )
}

export default MessageForm;