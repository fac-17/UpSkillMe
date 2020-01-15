import React from "react";

export default function ProjectRadioButtons({ selected, name, switches, onChange }) {

    const handleOptionChange = e => {
        onChange(e.target.value);
    };

    return (

        <div className={"radio-buttons"} style={{display: 'inline-flex'}}>
            {
                switches.map(item=>{
                    return (
                        <label key={item.value}>
                            <input type="radio"  name={name} value={item.value} checked={item.value===selected} onChange={handleOptionChange}/>
                            <i className="outer" ></i>
                            <i className="inner" >X</i>
                            <span>{item.label}</span>
                        </label>
                    )
                })
            }
        </div>
    );
}
