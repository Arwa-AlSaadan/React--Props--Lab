import React from 'react'

import Programers from './Programers'
import Services from './Services'

export default function Companies(props) {
  

  return (
  <div>


  

    <div className='company'>  

    <h2>Company Name : {props.companyName}</h2>
    <p>Emplyees num : {props.EmployeesNum}</p>
    <p> Publish year : {props.PublishYear}</p>

    <p>Services : {< Services serviceType= {props.serviceType} />}</p>
    <p>Expected Price : {< Services expectedPrice= {props.expectedPrice} />}</p>
      
    </div> 
  

    {/* {props.serviceType = Services.props.serviceType}
    {props.expectedPrice = Services.props.expectedPrice} */}
  

<div className='employeeInfo'>

  <div className={props.company1 == "Twaiq Academy"?"purple":"gray"}>
  <p> Employer name :{<Programers name = {props.name1} />} </p>
  <p> Programming language :{<Programers languages = {props.languages1} />} </p>
  <p> Experience years :{<Programers expYears = {props.expYears1} />} </p>
  <p> Company name :{<Programers company = {props.company1} />} </p>
  </div>


  
  <div className={props.company1 == "Twaiq Academy"?"purple":"gray"}>
  <p> Employer name :{<Programers name = {props.name2} />} </p>
  <p> Programming language :{<Programers languages = {props.languages2} />} </p>
  <p> Experience years :{<Programers expYears = {props.expYears2} />} </p>
  <p> Company name :{<Programers company = {props.company2} />} </p>
  </div>

  <div className={props.company1 == "Twaiq Academy"?"purple":"gray"}>
  <p> Employer name :{<Programers name = {props.name3} />} </p>
  <p> Programming language :{<Programers languages = {props.languages3} />} </p>
  <p> Experience years :{<Programers expYears = {props.expYears3} />} </p>
  <p> Company name :{<Programers company = {props.company3} />} </p>
  </div>



  </div>


{/* 
  {props.name = Programers.props.name}
    {props.languages = Programers.props.languages}
    {props.expYears = Programers.props.expYears}
    {props.company = Programers.props.company}  */}

 
   
</div>

  )
}
