import Form from'./Component/Form';
import { useState } from "react";

import './App.css';
export default function App(){
   const [notes, setnotes]=useState([]);
   const [ShowForm, setShowForm]=useState(false);
   return (
     <>
     <Form/> 
   
     </>
   );
}