import React from 'react';
import thematicAreas from '../data/thematic_areas';
import thematicCategories from '../data/thematic_categories';
// import courses from '../data/courses';
import useFetch from '../hook/useFetch';

const Courses = () => {

    // courses = core_course_get_courses
    // categories = core_course_get_categories
    const { results, isLoading, errorMessage} = useFetch("core_course_get_courses");

    console.log("RESULTS: ", results);
    console.log("LOADING: ", isLoading);
    console.log("ERROR: ", errorMessage);  

    const thematicOptions = thematicAreas.map((thematic, index) => (
        <option key={index} value={thematic.value}>{thematic.label}</option>
    ));

    const thematicCheckBox = thematicCategories.map((thematic, index) => (
        <div className="checkbox-btn" key={index}>
            <input type="checkbox" id={thematic.id} name="options" value={thematic.value}/>
            <label for={thematic.id}>{thematic.label}</label><br/>
        </div>
    ));

    const courseArea = results && results.length > 0 && results.map((course) => (
        <div className="box" key={course.id}>
            <div className="image">
                {/* {course.isNew? (<div className="new">NEW</div>) : ('')} */}
                <div className="new">NEW</div>
                <img src="/assets/images/courses/3.jpg" alt={course.displayname}/>
            </div>
            <div className="content">
                <h4>{course.displayname}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!</p>
                <div className="info">
                    <span className="date">{course.timecreated}</span>
                    <span className="time">1h 40m</span>
                </div>
            </div>      
        </div>
    ));

  return (
    <section className="section">

    <div className="search-box">
        <ul>
            <li><a href="link">Search by keyword</a></li>
            <li><a href="link">Search by thematic area</a></li>
        </ul>
    </div>

    
    <span className="desc">
        Explore our wide variety of free, multilingual courses in the areas of new urban agenda, solid waste management, sustainable urban mobility, urban climate and environmental actions, SDGs cities, urban safety and human security in cities, all supporting the Sustainable Development Goals (SDGs).
    </span>
  

    <div className="wrapper">

        <div className="options">
            <select id="thematic">
                <option selected>Thematic areas</option>
                {thematicOptions}
            </select>

            {thematicCheckBox}

        </div>

        <div className="actions">
            <button>
                search                    
            </button>

            <button>
                reset                     
            </button>
        </div>
        
    </div>

    <div className="title">
        <span className="header">Courses</span>
    </div>

    <div className="grid-container">
        {results && courseArea}
    </div>
    
</section>
  )
}

export default Courses;
