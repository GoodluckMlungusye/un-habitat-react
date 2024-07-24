import React from 'react';

const Courses = () => {
  return (
    <section class="section">

    <div class="search-box">
        <ul>
            <li><a href="link">Search by keyword</a></li>
            <li><a href="link">Search by thematic area</a></li>
        </ul>
    </div>

    
    <span class="desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores recusandae fugit quos. Quis nesciunt dicta vitae! Ipsum ea exercitationem, aperiam asperiores aliquid aliquam 
        sed necessitatibus esse eum quod cumque illo.
    </span>
  

    <div class="wrapper">

        <div class="options">
            <select id="thematic">
                <option selected>Thematic areas</option>
                <option value="">General(14)</option>
                <option value="">Measuring Sustainable Development Goals Indicators (9)</option>
                <option value="">Solid Waste management (5)</option>
                <option value="">Training materials (3)</option>
                <option value="">UN-Habitat staff (1)</option>
                <option value="">Sustainable urban mobility(2)</option>
                <option value="">Online classrooms (2)</option>
                <option value="">Urban climate and environmental action (1)</option>
                <option value="">SDG Cities Learning Path (3)</option>
            </select>

            <div class="checkbox-btn">
                <input type="checkbox" id="option1" name="options" value="option1"/>
                <label for="option1">New</label><br/>
            </div>
            
            <div class="checkbox-btn">
                <input type="checkbox" id="option2" name="options" value="option2"/>
                <label for="option2">Open</label><br/>
            </div>

            <div class="checkbox-btn">
                <input type="checkbox" id="option3" name="options" value="option3"/>
                <label for="option3">Certification</label><br/>
            </div>
            
        </div>

        <div class="actions">
            <button>
                search                    
            </button>

            <button>
                reset                     
            </button>
        </div>
        
    </div>

    <div class="title">
        <span class="header">Courses</span>
    </div>


    <div class="grid-container">

        <div class="box">
            <div class="image">
                <div class="new">NEW</div>
                <img src="/assets//images/courses/1.jpg" alt=""/>
            </div>
            <div class="content">
                <h4>Course One</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                </p>
                <div class="info">
                    <span class="date">June 2024</span>
                    <span class="time">1h 40m </span>
                </div>
            </div>
        </div>
    
        <div class="box">
            <div class="image">
                <div class="new">NEW</div>
                <img src="/assets//images/courses/2.jpg" alt=""/>
            </div>
            <div class="content">
                <h4>Course Two</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                </p>
                <div class="info">
                    <span class="date">June 2024</span>
                    <span class="time">1h 40m </span>
                </div>
            </div>
        </div>
    
        <div class="box">
            <div class="image">
                <div class="new">NEW</div>
                <img src="/assets//images/courses/3.jpg" alt=""/>
            </div>
            <div class="content">
                <h4>Course Three</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                </p>
                <div class="info">
                    <span class="date">June 2024</span>
                    <span class="time">1h 40m </span>
                </div>
            </div>
        </div>
    
        <div class="box">
            <div class="image">
                <div class="new">NEW</div>
                <img src="/assets//images/courses/4.jpg" alt=""/>
            </div>
            <div class="content">
                <h4>Course Four</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                </p>
                <div class="info">
                    <span class="date">June 2024</span>
                    <span class="time">1h 40m </span>
                </div>
            </div>
        </div>
    
        <div class="box">
            <div class="image">
                <img src="/assets//images/courses/4.jpg" alt=""/>
            </div>
            <div class="content">
                <h4>Course Five</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                </p>
                <div class="info">
                    <span class="date">June 2024</span>
                    <span class="time">1h 40m </span>
                </div>
            </div>
        </div>
    
        <div class="box">
            <div class="image">
                <img src="/assets//images/courses/1.jpg" alt=""/>
            </div>
            <div class="content">
                <h4>Course Six</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                </p>
                <div class="info">
                    <span class="date">June 2024</span>
                    <span class="time">1h 40m </span>
                </div>
            </div>
        </div>
    
        <div class="box">
            <div class="image">
                <img src="/assets//images/courses/2.jpg" alt=""/>
            </div>
            <div class="content">
                <h4>Course Seven</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                </p>
                <div class="info">
                    <span class="date">June 2024</span>
                    <span class="time">1h 40m </span>
                </div>
            </div>
        </div>
    
        <div class="box">
            <div class="image">
                <img src="/assets//images/courses/3.jpg" alt=""/>
            </div>
            <div class="content">
                <h4>Course Eight</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                </p>
                <div class="info">
                    <span class="date">June 2024</span>
                    <span class="time">1h 40m </span>
                </div>
            </div>
        </div>
    
    </div>
    

</section>
  )
}

export default Courses;
