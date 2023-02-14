import React from 'react';
import data from '../../sfpopos-data.js';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import { useState } from 'react';
import './POPOSList.css';

function POPOSList() {
  const [ query, setQuery ] = useState('')
  const spaces = data.filter(({ title, address }) => {
    const inTitle = title.toString().toLowerCase().includes(query.toLowerCase())
    const inAddress = address.toString().toLowerCase().includes(query.toLowerCase())
    return inTitle || inAddress
  }).map((obj) => {

    const { id, images, title, address, hours } = obj

    return (
      <div className='POPOSList'>
      <POPOSSpace
        id={id}
        key={`${title}-${id}`}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
      </div>
    )
  })

  return (
    <div className="POPOSList">
    <form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
      { spaces }
    </div>
  )
}
  
  export default POPOSList
