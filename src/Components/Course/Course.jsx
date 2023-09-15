/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './Course.css';

const Course = ({selectedCourses, remaining, totalHour}) => {
    console.log(selectedCourses);
    return (
        <div className='w-80 bg-gray-300 mi-4 mt-10 p-10'>
            <h5>Credit Hour Remaining: {remaining}</h5>
            <h1 className="txt-4xl font-bold">Course Name</h1>
            {selectedCourses.map((courses) => (
                <li key={courses.id}>{courses.course_name}</li>
            ))}
            <h5>Total Credit Hour: {totalHour}</h5>
        </div>
    );
};

export default Course;