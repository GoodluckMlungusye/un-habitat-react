import React from 'react';
import thematicAreas from '../data/thematic_areas';
import thematicCategories from '../data/thematic_categories';
import courses from '../data/courses';

const Courses = () => {


 const thematicOptions = thematicAreas.map((thematic, index) => (
    <option key={index} value={thematic.value}>{thematic.label}</option>
 ));

 const thematicCheckBox = thematicCategories.map((thematic, index) => (
    <div className="checkbox-btn" key={index}>
        <input type="checkbox" id={thematic.id} name="options" value={thematic.value}/>
        <label for={thematic.id}>{thematic.label}</label><br/>
    </div>
 ));

 const courseArea = courses.map((course, index) => (
    <div className="box" key={index}>
        <div className="image">
            {course.isNew? (<div className="new">NEW</div>) : ('')}
            <img src={course.image} alt={course.name}/>
        </div>
        <div className="content">
            <h4>{course.name}</h4>
            <p>
            {course.description}
            </p>
            <div className="info">
                <span className="date">{course.date}</span>
                <span className="time">{course.time}</span>
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores recusandae fugit quos. Quis nesciunt dicta vitae! Ipsum ea exercitationem, aperiam asperiores aliquid aliquam 
        sed necessitatibus esse eum quod cumque illo.
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
        {courseArea}
    </div>
    
</section>
  )
}

export default Courses;
