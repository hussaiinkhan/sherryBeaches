import React from 'react'
import boraBora from '../assets/borabora.jpg'
import boraBora2 from '../assets/borabora2.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import keywest from '../assets/keywest.jpg'
import SelectsCard from './SelectsCard'

function Select() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCard bg={maldives} text='Maldives'/>
        <SelectsCard bg={boraBora2} text='Jamaica'/>
        <SelectsCard bg={boraBora} text='Antigua'/>
        <SelectsCard bg={maldives2} text='Cozumel'/>
        <SelectsCard bg={maldives} text='Bora Bora'/>
        <SelectsCard bg={keywest} text='Key West'/>
        
    </div>
  )
}

export default Select