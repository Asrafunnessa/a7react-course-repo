/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import './Courses.css';
import Course from "../Course/Course";

const Courses = () => {

    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalHour, setTotalHour] = useState(0);

    useEffect(() =>{
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => setAllCourses(data))
    }, [])

    const handleSelectCourses = (courses) => {
        const isExist = selectedCourses.find(item => item.id ==
        courses.id);
        let count = courses.credit;

        if(isExist ){
             return alert("already selected");
        }
        else{

            selectedCourses.forEach((item) => {
                count = count + item.credit;
            });

             const totalRemaining = 20-count;
             setTotalHour(count);
             setRemaining(totalRemaining);

            setSelectedCourses([...selectedCourses, courses]);
        }
    };
    

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
                    <p>Credit:{courses.credit} hr</p>
                 </div>
                <button onClick={()=>handleSelectCourses(courses)} className="card-btn">Select</button>
              </div>
                ))
              }
              </div>
               <div className="cart">
                <Course 
                 selectedCourses={selectedCourses}
                 remaining={remaining}
                  totalHour={totalHour}></Course>
               </div>
            </div>
        </div>
    );
};

export default Courses;