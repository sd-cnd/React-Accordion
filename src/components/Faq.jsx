import Accordion from './Accordion'
import data from "../data.json"

export default function Faq() {
    // console.log(data);
    return (
        <div>
            <h3>FAQs</h3>
            {data.faqs.map((obj, index) => {
                return ( <Accordion key={index} qna={obj} />)
            })}
           
        </div>
    )
}
