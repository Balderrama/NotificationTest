import { useEffect } from "react";

function LogsList({getLogsRequest, logsData}) {

    useEffect(()=>{ 
        getLogsRequest();
    },[])

    if (logsData === "") return null;
    return (
        <section className="wrapper">
            <h1>Logs</h1>
            <div style={{overflowX: 'auto',width:'100%', maxHeight: "420px"}}>
            <table style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    { logsData.toString().split("\n").reverse().map((log, index) => {
                            if( index <= log.length - 1){
                            const {user,date, id, message} = JSON.parse(log);
                            const {name, email, phoneNumber} = user;
                            return <tr key={id}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phoneNumber}</td>
                                <td>{message}</td>
                                <td>{new Date(date).toLocaleString()}</td>
                            </tr> 
                    }
            })}
              </tbody>
            </table>
            </div>
        </section>
    )
}

export default LogsList;