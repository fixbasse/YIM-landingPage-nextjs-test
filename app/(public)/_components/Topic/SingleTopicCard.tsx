import React from 'react'
import { IoIosGitBranch } from "react-icons/io";

const SingleTopicCard = () => {
    return (
        <div className='shadow-md rounded-xl p-4 flex flex-col'>
            <div className='flex items-center gap-2'>
                <IoIosGitBranch />

                <h3>
                    Data
                </h3>
            </div>

            <p>
                เรียนรู้
            </p>

        </div>
    )
}

export default SingleTopicCard