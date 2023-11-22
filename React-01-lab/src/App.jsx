import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Companies from './component/Companies'
import Services from './component/Services'
import Programers from './component/Programers'


function App() {

  return (
  
  <div>
    <Companies 
     companyName="Elm"
     EmployeesNum={40}
    PublishYear={2010}
    serviceType="Techn"
    expectedPrice={1000}  


    name1 = "Arwa"
    languages1="JS"
    expYears1 ={5}
    company1 = "Elm"


    name2 = "Amani"
    languages2="Python"
    expYears2 ={7}
    company2 = "Elm"

    name3 = "Ahmed"
    languages3="Java"
    expYears3 ={2}
    company3 = "Elm"

    />


<Companies 
     companyName="Twaiq Academy"
     EmployeesNum={30}
    PublishYear={2017}
    serviceType="Techn"
    expectedPrice={20000}  


    name1 = "Ali"
    languages1="JS"
    expYears1 ={5}
    company1 = "Twaiq Academy"


    name2 = "Maram"
    languages2="Python"
    expYears2 ={7}
    company2 = "Twaiq Academy"

    name3 = "Maan"
    languages3="Java"
    expYears3 ={2}
    company3 = "Twaiq Academy"

    />


<Companies 
     companyName="Thiqah"
     EmployeesNum={60}
    PublishYear={2018}
    serviceType="Techn"
    expectedPrice={30000}  


    name1 = "Arwa"
    languages1="JS"
    expYears1 ={2}
    company1 = "Thiqah"

    name2 = "Amani"
    languages2="Python"
    expYears2 ={9}
    company2 = "Thiqah"

    name3 = "Ahmed"
    languages3="Java"
    expYears3 ={6}
    company3 = "Thiqah"

    />
</div>







    
    
    


  


   
  )
}

export default App
