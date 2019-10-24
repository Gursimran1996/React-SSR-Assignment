import React, { useState } from "react";
import "./accordion.css";

const Accordion = (props) => {

    const [setActive, setActiveState] = useState("");

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
    }

    return (
        <div className="accordion__section">
            <div className="accordion">
                <p className="accordion__title">{props.title}</p>
                {props.content ? <div  onClick={toggleAccordion} className="accordion__icon">
                    {setActive === '' ? '+' : '-'}
                </div>
                    :
                    null}
            </div>
            {setActive === 'active' ?
                <div className="accordion__content">
                    <ul className="content__list">
                        {
                            props.content.map((content,index) => {
                                return <li key={index} className="accordion__text"><span><input type="radio" value={content}/></span>{content}</li>
                            })
                        }
                    </ul>
                    {/* <div ></div> */}
                </div>
                : null
            }
        </div>
    );
}

export default Accordion;