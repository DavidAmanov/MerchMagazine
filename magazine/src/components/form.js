import React from "react";
import { useForm } from "react-hook-form"; //for comfortable work with form
import './form.css'

export default function Form(){
   const {
    register, 
    formState:{
        errors,
    },
    handleSubmit,
   } = useForm();

   const onSubmit = (data) => console.log(data)

    return(
        <div className="formBlock">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input {...register('name', {required: true})} className="item" type="text" placeholder="First name..."></input>
                <input {...register('surname', {required: true})} className="item"  type="text" placeholder="Last name..."></input>
                <input {...register('phone', {required: true, minLength:{value: 10}, maxLength:{value: 13}})} className="item" type="tel" placeholder="Phone number..."></input>
                <input {...register('email', {required: true, pattern:/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/})} className="item" type="email" placeholder="Email..."></input>
                <input {...register('address', {required: true})} className="item" type="text" placeholder="Address..."></input>
                <input {...register('postcode', {required: true, minLength:{value: 6}, maxLength:{value: 6}})} className="item"  type="text" placeholder="Post-code..."></input>
                <button className="button" type="submit">Send</button>
            </form>
        </div>
    )
}