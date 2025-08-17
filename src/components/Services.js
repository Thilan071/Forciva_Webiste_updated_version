import React from 'react';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      title: "Custom Software Development",
      description: "We build tailor-made software from the ground up to meet your unique business needs."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      title: "Cloud & DevOps",
      description: "Optimize your infrastructure with our cloud integration and DevOps automation services."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
        </svg>
      ),
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide a seamless user experience."
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-primary-accent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive software solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-secondary-dark rounded-xl p-8 text-center hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary-accent group"
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-6">
                <button className="text-primary-accent hover:text-secondary-accent font-semibold transition-colors duration-200 flex items-center justify-center mx-auto group">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
