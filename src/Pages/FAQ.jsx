import React from 'react';

const FAQ = () => {
  return (
    <>
      <div className="card my-4 p-4 border-0 shadow-sm rounded-4" style={{ background: "#CCDCF3" }}>
        <h4 className="fw-bold ">Frequently Asked Questions</h4>
        <div className="accordion p-2" id="faqAccordion">
          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>How do I book a trip?</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can book a trip by selecting travel dates and preferred options (flights, hotels, activities) then proceed to checkout for confirmation.
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>What payment methods do you support?</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We accept credit cards, PayPal, and bank transfers.
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Can I get a refund if I cancel my booking?</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Refund policies vary based on the provider and type of booking. Check your specific booking details for eligibility.
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <strong>Are there any hidden fees?</strong>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                No, we ensure transparent pricing. Any additional charges will be clearly mentioned before booking.
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <strong>How do I find the best travel deals?</strong>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Subscribe to our newsletter and follow our social media to get the latest deals and offers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
