import React, { useState } from 'react'
import data from '../assets/data'
import './Accordion.css'

const Accordion = () => {

    const [selected, setSelected] = useState(null)

    const handleSingleSelection = (id) => {
        setSelected(prev => (prev === id ? null : id))
    }

  return (
    <section className="faq">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="accordion">
            {data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div className={`item ${selected === dataItem.id ? 'open' : ''}`} key={dataItem.id}>
                        <button
                            className="item-header"
                            onClick={() => handleSingleSelection(dataItem.id)}
                            aria-expanded={selected === dataItem.id}
                            aria-controls={`panel-${dataItem.id}`}
                        >
                            <h3 className="question">{dataItem.queastion}</h3>
                            <span className="chev" aria-hidden>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </button>

                        <div id={`panel-${dataItem.id}`} className={`item-panel ${selected === dataItem.id ? 'open' : ''}`}>
                            <div className="panel-inner">{dataItem.answer}</div>
                        </div>
                    </div>
                ))
            ) : "No data found"}
        </div>
    </section>
  )
}

export default Accordion
