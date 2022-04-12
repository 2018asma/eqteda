import React from 'react'

 const EditOrganizer = ({hideElemnt})=>{
  return (
    <div className='bg-red-300'>
        <form action="">
            <div>
                <input type="text" />
            </div>
            <button onClick={hideElemnt}>close</button>
        </form>
    </div>
  )
}

export default EditOrganizer