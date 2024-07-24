import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';

const Gallery = () => {
  const galleryRef = useRef(null);
  const $galleryContainer = useRef(null);

  useEffect(() => {
    // Initialize Isotope when component mounts
    $galleryContainer.current = new Isotope(galleryRef.current, {
      itemSelector: '.item',
      layoutMode: 'fitRows',
    });

    return () => {
      // Clean up Isotope instance when component unmounts
      $galleryContainer.current.destroy();
    };
  }, []);

  const handleFilter = (value) => {
    $galleryContainer.current.arrange({ filter: value });
  };

  return (
    <>
      <div className="button-group">
        <button className="button active" onClick={() => handleFilter('*')}>
          all
        </button>
        <button className="button" onClick={() => handleFilter('.urban')}>
          new urban agenda
        </button>
        <button className="button" onClick={() => handleFilter('.high')}>
          measuring sustainable development goals indicators
        </button>
        <button className="button" onClick={() => handleFilter('.middle')}>
          participatory slum upgrading programme
        </button>
        <button className="button" onClick={() => handleFilter('.management')}>
          solid waste management
        </button>
        <button className="button" onClick={() => handleFilter('.marketing')}>
          general
        </button>
        <button className="button" onClick={() => handleFilter('.sdg')}>
          SDG cities learning path
        </button>
      </div>


      <div ref={galleryRef} className="gallery">
 
        <div className="item urban">
            <div className="image">
                <img src="/assets/images/courses/1.jpg" alt=""/>
            </div>
            <div className="content">
                <h4>Course One</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                </p>
                <div className="info">
                    <span className="view-btn">view</span>
                </div>
            </div>
        </div>
        
            <div className="item urban">
                <div className="image">
                    <img src="/assets/images/courses/2.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Two</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>

            <div className="item urban">
                <div className="image">
                    <img src="/assets/images/courses/3.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Three</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>

            <div className="item high">
                <div className="image">
                    <img src="/assets/images/courses/4.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course One</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>
        
            <div className="item high">
                <div className="image">
                    <img src="/assets/images/courses/1.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Two</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>

            <div className="item high">
                <div className="image">
                    <img src="/assets/images/courses/2.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Three</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>
            
            <div className="item middle">
                <div className="image">
                    <img src="/assets/images/courses/3.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course One</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>
        
            <div className="item middle">
                <div className="image">
                    <img src="/assets/images/courses/4.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Two</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>

            <div className="item middle">
                <div className="image">
                    <img src="/assets/images/courses/1.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Three</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>
            
            <div className="item management">
                <div className="image">
                    <img src="/assets/images/courses/2.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course One</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>
        
            <div className="item management">
                <div className="image">
                    <img src="/assets/images/courses/3.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Two</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>

            <div className="item management">
                <div className="image">
                    <img src="/assets/images/courses/4.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Three</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>

            <div className="item marketing">
                <div className="image">
                    <img src="/assets/images/courses/1.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course One</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>
        
            <div className="item marketing">
                <div className="image">
                    <img src="/assets/images/courses/2.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Two</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>

            <div className="item marketing">
                <div className="image">
                    <img src="/assets/images/courses/3.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Three</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>

            <div className="item sdg">
                <div className="image">
                    <img src="/assets/images/courses/4.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Three</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>

            <div className="item sdg">
                <div className="image">
                    <img src="/assets/images/courses/1.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course One</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>

            <div className="item sdg">
                <div className="image">
                    <img src="/assets/images/courses/2.jpg" alt=""/>
                </div>
                <div className="content">
                    <h4>Course Two</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex! Ea enim at corporis aspernatur quae omnis molestias ipsam ex!
                    </p>
                    <div className="info">
                        <span className="view-btn">view</span>
                    </div>
                </div>
            </div>
      </div>
    </>
  );
};

export default Gallery;
