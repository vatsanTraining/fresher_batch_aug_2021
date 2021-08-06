import React,{useState} from "react";

const useForm = (callBack:any,initialState:{}) => {
    
    const [values,setValues] = useState(initialState);

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) =>{

         setValues({ ...values, [event.target.name]: event.target.value });
          }

    const onSubmit =(event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        callBack();
    }

    return {
         onChange,onSubmit,values
    }
        
}

export default useForm
