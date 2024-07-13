import { useState } from "react"

export default function Accordion({ qna = {}}) {
   const [show, setShow] = useState(false);

   const handleClick = () => {
    setShow(!show)
   }

  return (
    <div className='accordion'>
      <h4>
        {qna.question} <span onClick={handleClick}>{show?"-":"+"}</span>
      </h4>
      {show? <p>{qna.answer}</p> : ""}
    </div>
  )
}
