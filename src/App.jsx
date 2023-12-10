import React from 'react'

const App = () => {


  const courses = [
    {
      id: 1,
      title: "Web Dev Foundation",
      studentCount: 5,
    },
    {
      id: 2,
      title: "Special Web Design",
      studentCount: 7,
    },
    {
      id: 3,
      title: "Basic UI Design",
      studentCount: 0,
    },
    {
      id: 4,
      title: "Premium UI Design",
      studentCount: 5,
    },
    {
      id: 5,
      title: "Web App Development",
      studentCount: 0,
    },
  ];

  const title = "our courses"
  return (
    <div className='border border-gray-500 m-4 rounded-lg  p-5'>
      <h1 className="p-4  font-bold text-2xl"> {title}</h1>
      <ul>
        {courses.map((courses) => (


          <li className= {`border border-s rounded-lg ${courses.studentCount=== 0 ? " bg-slate-400" : "bg-red-400"} mb-5 p-3`}key={courses.id}>  
          

          {`${courses.studentCount} ${courses.title}`}
          </li>

        ))}

      </ul>

    </div>
  )
}

export default App
