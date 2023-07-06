import React, { useState, useEffect } from 'react';
import { callApi } from '../helpers/axios_helper';
import { toast } from 'react-toastify';
import { getUser } from '../helpers/auth_helper';



export default function AuthContent(props){

    const [apiResponse, setApiResponse] = useState("");

    useEffect(()=>{
        handleCallApi();
    },[]);

    const handleCallApi = async () => {
      try {
        const user = getUser();
        if (user) {
          const response = await callApi();
          setApiResponse(response.data);
    
          toast.success('Api returned data successfully, check in section - Api response');
          console.log("dataResponse : : " + response.data);
        } else {
          toast.info('You are not logged in.');
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    
    return (
        <div className="row justify-content-md-center">
            <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Backend response</h5>
                        <h6 className="card-subtitle mb-2 text-muted">From : {props.user["profile"]["name"]}</h6>
                        <p className="card-text">Content:{apiResponse}</p>                       
                    </div>
                </div>
            </div>
        </div>
    );
  }
