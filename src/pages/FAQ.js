import React from 'react'
import faqs from '../data/faq'

const FAQ = () => {

  const faqBlock = faqs.map((faq,index) => (
    <div class="faq-container" key={index}>
        <div class="faq-item">
            <span class="faq-qn">{faq.question}</span>
            <p class="faq-ans">{faq.answer}</p>
        </div>
    </div>
  ));
    

  return (
    <section class="section">

    <div class="title">
        <span class="header">Frequently asked questions</span>
        <p class="desc">The FAQ page is the quickest way to solve the most common issues you may have. Please take a minute to read through the answers before contacting us. If you need to contact our support team, please make sure to provide us with your registration email and the name of the course you want to take or are taking.</p>
    </div>

    <div class="faq-items-container">
        {faqBlock}
    </div>
    
</section>
  )
}

export default FAQ