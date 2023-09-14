/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './Course.css';

const Course = ({selectedCourses}) => {
    console.log(selectedCourses);
    return (
        <div>
            <h1 className="txt-4xl font-bold">Course Name</h1>
            {selectedCourses.map((courses) => (
                <li key={courses.id}>{courses.course_name}</li>
            ))}
            <h5>Total Credit Hour: </h5>
        </div>
    );
};

export default Course;