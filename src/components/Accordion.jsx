import React from 'react'
import { useState } from 'react'
import data from '../assets/data'

const Accordion = () => {

    const [selected, setSelected] = useState(null)

    const handleSingalSelection = (getCurentData) => {
        setSelected(getCurentData === selected ? null : getCurentData)
    }

  return (
    <div>
        <h1>Frequently Asked Questions</h1>
        <div className="accordion">
            {data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div className='item' onClick={()=> handleSingalSelection(dataItem.id)}>
                        <div className='title'>
                            <h3>{dataItem.queastion}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id ? <div>{dataItem.answer}</div> : null
                        }
                    </div>
                ))
            ) : "No data found"}
        </div>
    </div>
  )
}

export default Accordion
