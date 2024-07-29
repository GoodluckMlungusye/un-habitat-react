import React, { useEffect, useState} from 'react';
import animatedInfo from '../data/animated_info'

function PaceCourse() {
    const [activeValue, setActiveValue] = useState(animatedInfo[0].value)
    const [currentLabel, setCurrentLabel] = useState(animatedInfo[0].label);
    const [currentDescription, setCurrentDescription] = useState(animatedInfo[0].description);
    const [currentIcon, setCurrentIcon] = useState(animatedInfo[0].icon);
    const [currentValue, setCurrentValue] = useState(animatedInfo[0].value);

    const handleFilter = (object,index) => {
        setActiveValue(object.value);
        setCurrentLabel(object.label);
        setCurrentDescription(object.description);
        setCurrentIcon(object.icon);
    };

    const paceSelector = animatedInfo.map((animeInfo,index) => (
        <div className={`selector-head ${activeValue === animeInfo.value? "active": " "}`} key={animeInfo.value} onClick={() => handleFilter(animeInfo,index)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={animeInfo.icon} />
            </svg>
            <span>{animeInfo.label}</span>
        </div>
    ));

    useEffect(() => {
        setCurrentValue(activeValue);
    },[activeValue]);

  return (
    <div className="pace-container">
            <div className={`pace-view ${activeValue === currentValue ? "active" : ""}`}>
                <div className='view-head'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={currentIcon} />
                    </svg>
                    <span>{currentLabel}</span>
                </div>
                <p>{currentDescription}</p>
            </div>
        <div className="pace-selector">
            {paceSelector}
        </div>
    </div>
  )
}

export default PaceCourse