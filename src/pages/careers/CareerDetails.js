import React from 'react'
import { useLoaderData} from 'react-router-dom'

export default function CareerDetails() {

    const career = useLoaderData()

  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
           </p>
        </div>
    </div>
  )
}
