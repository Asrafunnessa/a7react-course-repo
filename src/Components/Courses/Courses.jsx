/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import './Courses.css';

const Courses = () => {

    const [allCourses, setAllCourses] = useState([]);

    useEffect(() =>{
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => setAllCourses(data))
    }, [])

    console.log(allCourses);

    return (
        <div className="container">
            <div className="courses-container">
              <div className="card-container">
              {
                allCourses.map((courses) => (
                    <div key={courses.id} className="card">
                <div className="card-img">
                    <img className="photo" src={courses.image} alt="" />
                </div>
                <h2 className="font-bold txt-xl space-y-4">{courses.course_name}</h2>
                 <p><small>{courses.details}</small></p>
                 <div className="info">
                    <p>$ Price:{courses.price}</p>
                    <p>Credit:{courses.credit}</p>
                 </div>
                 <button className="card-btn">Select</button>
              </div>
                ))
              }
              </div>
               <div className="cart">
                <h1>this is cart</h1>
               </div>
            </div>
        </div>
    );
};

export default Courses;