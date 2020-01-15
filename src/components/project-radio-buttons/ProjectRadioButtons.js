import React from "react";

export default function ProjectRadioButtons({ selected, switches, onChange }) {

    const handleOptionChange = e => {
        onChange(e.target.value);
    };

    return (

        <div className={"radio-buttons"} style={{display: 'inline-flex'}}>
            {
                switches.map(item=>{
                    return (
                        <label key={item.value}>
                            <input type="radio"  value={item.value} checked={item.value===selected} onChange={handleOptionChange}/>
                            <i className="outer"></i>
                            <i className="inner"><strong style={{fontSize: '1.2rem', fontStyle: 'normal'}}>X</strong></i>
                            <span>{item.label}</span>
                        </label>
                    )
                })
            }
        </div>
    );
}
