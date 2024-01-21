import React from 'react'
import './DiscriptionBox.css'

const DiscriptionBox = () => {
  return (
    <div className='discriptionbox'>
        <div className="discriptionbox-navigator">
            <div className="discriptionbox-nav-box">
                Discription
            </div>
            <div className="discriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
       <div className="discriptionbox-discription">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Cum aspernatur ipsum tempore. Nisi dolor dignissimos,
             dolore eius laboriosam consequuntur Lorem ipsum, dolor sit 
             amet consectetur adipisicing elit. Debitis eos saepe laudantium 
             odio dolore perferendis laboriosam? Quas iste dolores possimus.</p>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat 
                eligendi ipsum reprehenderit consectetur aliquam. Eligendi
                 explicabo qui voluptatibus! Quisquam fugiat debitis ducimus
                  magni ratione iste voluptatem magnam nulla eveniet modi.
             </p>
       </div>
    </div>
  )
}

export default DiscriptionBox
