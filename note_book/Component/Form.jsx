import { useState } from "react";
const Form=()=>{
    const [Maintopic, setMaintopic]=useState(" ");
    const [Subtopic, setSubtopic]=useState(" ");
    const [content, setcontent]=useState(" ");
    const submitHandler=(ev)=>{
        ev.preventDefault();
        const note=()=>{
            Maintopic,
            Subtopic,
            content
        }
    }

return <main>
    <form className="form"   onSubmit={submitHandler}>
        <legend>Taking note</legend>
        <input placeholder="main text"
         type="text" 
         className="main_topic"
          value={Maintopic}
          onChange={(event)=>{
            setMaintopic(event.target.value);
          }}
          />
        <input placeholder="sub text"
         type="text" 
         className="sub_topic"
         value={Subtopic}
         onChange={(event)=>{
            setSubtopic(event.target.value);
         }}/>
        <textarea 
         className="text_topic"
         value={content}
         onChange={(event)=>{
            setcontent(event.target.value);
         }}
         />
        <input  type="submit"/>
        {console.log(Maintopic)}
    </form>
</main>
}
export default Form;