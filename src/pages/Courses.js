import React, { useState } from 'react';
import { Vortex } from 'react-loader-spinner';
import thematicAreas from '../data/thematic_areas';
import thematicCategories from '../data/thematic_categories';
import useFetch from '../hook/useFetch';
import formatParagraph from '../actions/formatParagraph';
import truncateParagraph from '../actions/truncateParagraph';
import formatDate from '../actions/formatDate';
import { LATEST_DATE_CRITERIA } from '../constants/misc';
import { LOADING_SPINNER_COLORS } from '../constants/misc';
import { showCourse } from '../actions/showCourse';
import { ASSET_URL } from '../constants/links';

const Courses = () => {
    // courses = core_course_get_courses
    // categories = core_course_get_categories
    const { results, isLoading, errorMessage} = useFetch("core_course_get_courses");

    const [currentPage, setCurrentPage] = useState(1);
    const cutoffDate = new Date(LATEST_DATE_CRITERIA).getTime() / 1000; 
    const ITEMS_PER_PAGE = 8;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const sortedResults = results
    .filter(course => course.summary && course.summary.length > 0 && course.visible === 1)
    .sort((a, b) => b.startdate - a.startdate);

    const totalPages = results && results.length > 0 &&  Math.ceil(sortedResults.length / ITEMS_PER_PAGE);

    const currentCourses = results && results.length > 0 &&  sortedResults.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(prevPage => prevPage + 1);
        }
      };
    
      const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(prevPage => prevPage - 1);
        }
      };

    const thematicOptions = thematicAreas.map((thematic, index) => (
        <option key={index} value={thematic.value}>{thematic.label}</option>
    ));

    const thematicCheckBox = thematicCategories.map((thematic, index) => (
        <div className="checkbox-btn" key={index}>
            <input type="checkbox" id={thematic.id} name="options" value={thematic.value}/>
            <label for={thematic.id}>{thematic.label}</label><br/>
        </div>
    ));

    const courseArea = results && results.length > 0 && currentCourses.map((course) => {
            const isNew = course.startdate > cutoffDate;
            return (
                <div className="box" key={course.id} onClick={() => showCourse(course.id)}>
                    <div className="image">
                        {
                            isNew ? 
                            <div class="arrow">
                                <span class="arrow-text">NEW</span>
                            </div>
                            : 
                            null
                        }
                        <img src={`${ASSET_URL}/courses/pic.jpg`} alt={course.displayname} />
                    </div>
                    <div className="content">
                        <h4>{course.displayname}</h4>
                        <p>{truncateParagraph(formatParagraph(course.summary), 20)}</p>
                        <div className="info">
                            <span className="date">{formatDate(course.startdate)}</span>
                            <span className="readmore">read more</span>
                        </div>
                    </div>
                </div>
            );
        });


  return (
    <section className="section">

        {isLoading &&
             <div className='loader'>
                <div className="spinner">
                    <Vortex
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={LOADING_SPINNER_COLORS}
                    />
                </div>
             </div>
        }


        {
            errorMessage && errorMessage.length > 0 &&

            <div className='loader'>
                <p>
                    {errorMessage}
                </p>
            </div>
        }


        {
            results && results.length > 0 &&

            <>
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

                <div className="pagination-controls">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </>

        }

</section>
  )
}

export default Courses;
