import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex-rounded-4xl flex overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
        {props.users.map(function(elem,idx){

         return <RightCard key={idx} color={elem.color} tag={elem.tag} img={elem.img} id={idx} />
          })}
         

    </div>
  )
}

export default RightContent