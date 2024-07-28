// import React, { useState, useEffect, useRef } from 'react';
import React, { useState} from 'react';
// import Isotope from 'isotope-layout';
import animatedInfo from '../data/animated_info'

function PaceCourse() {

    // const galleryRef = useRef(null);
    // const $galleryContainer = useRef(null);
    const [activeValue, setActiveValue] = useState(animatedInfo[0].value)
    const [currentLabel, setCurrentLabel] = useState(animatedInfo[0].label);
    const [currentDescription, setCurrentDescription] = useState(animatedInfo[0].description);
    const [currentIcon, setCurrentIcon] = useState(animatedInfo[0].icon);
    // const [renderObject, setRenderObject] = useState()


    // useEffect(() => {
    //     // Initialize Isotope when component mounts
    //     $galleryContainer.current = new Isotope(galleryRef.current, {
    //     itemSelector: '.item',
    //     layoutMode: 'fitRows',
    //     });

    //     return () => {
    //     // Clean up Isotope instance when component unmounts
    //     $galleryContainer.current.destroy();
    //     };
    // }, []);

    const handleFilter = (object) => {
        // $galleryContainer.current.arrange({ filter: value });
        setActiveValue(object.value);
        setCurrentLabel(object.label);
        setCurrentDescription(object.description);
        setCurrentIcon(object.icon);
    };

    // useEffect(() => {
    //     if (object) {
    //       handleFilter(object);
    //     }
    //   }, [object]); // Depend on `object`
      

    // const paceSelector = animatedInfo.map((animeInfo) => (
    //     <div className={`selector-head ${activeValue === animeInfo.value? "active": " "}`} key={animeInfo.value} onClick={() => handleFilter(`.${animeInfo.value}`, animeInfo)}>
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    //             <path strokeLinecap="round" strokeLinejoin="round" d={animeInfo.icon} />
    //         </svg>
    //         <span>{animeInfo.label}</span>
    //     </div>
    // ));

    const paceSelector = animatedInfo.map((animeInfo) => (
        <div className={`selector-head ${activeValue === animeInfo.value? "selector-head-active": " "}`} key={animeInfo.value} onClick={() => handleFilter(animeInfo)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={animeInfo.icon} />
            </svg>
            <span>{animeInfo.label}</span>
        </div>
    ));


  return (
    <div className="pace-container">
            <div className="pace-view preview">
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