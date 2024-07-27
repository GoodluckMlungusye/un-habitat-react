import React from 'react'
import faqs from '../data/faq'

const FAQ = () => {

  const faqBlock = faqs.map((faq,index) => (
    <div className="faq-container" key={index}>
        <div className="faq-item">
            <span className="faq-qn">{faq.question}</span>
            <p className="faq-ans">{faq.answer}</p>
        </div>
    </div>
  ));
    

  return (
    <section className="section">

    <div className="title">
        <span className="header">Frequently asked questions</span>
        <p className="desc">The FAQ page is the quickest way to solve the most common issues you may have. Please take a minute to read through the answers before contacting us. If you need to contact our support team, please make sure to provide us with your registration email and the name of the course you want to take or are taking.</p>
    </div>

    <div className="faq-items-container">
        {faqBlock}
    </div>
    
</section>
  )
}

export default FAQ