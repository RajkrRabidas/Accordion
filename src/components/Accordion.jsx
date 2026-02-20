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
            {data.map((item) => (
                <div className="item" key={item.id}>
                    <div className="title" onClick={() => handleSingalSelection(item.id)}>
                        <h2>{item.queastion}</h2>
                        <span>{selected === item.id ? '-' : '+'}</span>
                    </div>
                    <div className={selected === item.id ? 'content show' : 'content'}> 
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Accordion
