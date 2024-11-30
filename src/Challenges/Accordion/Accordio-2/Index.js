import { useState } from "react";
import "./Styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  const [Full ,setFull]=useState(null)
  return (
    <div>
      <Accordion faq={faqs} Full={Full} setFull={setFull} />
    </div>
  );
}

function Accordion({faq,Full,setFull}) {
  return <div>
    <ul className="accordion">
{faq.map((el,i)=><AccordionItem  Full={Full} setFull={setFull} title={el.title} text={el.text} num={i}/>)}
    </ul>
  </div>;
}



function  AccordionItem({num,title,text,Full,setFull}){

 const isOpen = num === Full
  
function handleToggle(){
 setFull(num)
}

return(
  <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
  <p className="number">{num < 9 ? ` 0${num +1}`: num +1 }</p>
  <p className="title">{title}</p>
  <p className="icon">{isOpen ? "-": "+"}</p>
 {isOpen &&  <div className="content-box">{text}</div>}
</div>
)
}