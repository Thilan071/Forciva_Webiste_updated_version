import React from 'react';

const TermsOfService = () => {
  const goBack = () => {
    // Navigate to home page by reloading the page and clearing any state
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <div className="bg-primary-dark border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={goBack}
              className="text-primary-accent hover:text-secondary-accent transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              ← Back to Home
            </button>
            <h1 className="text-2xl font-bold text-white">Terms of Service</h1>
            <div></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 space-y-8">
            <div className="text-gray-300 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Forciva's software development services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, then you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
              <p>
                Forciva provides professional software development services including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Custom Software Development:</strong> Tailored applications built to meet specific business requirements using modern technologies and best practices
                </li>
                <li>
                  <strong>Cloud & DevOps Solutions:</strong> Infrastructure design, deployment automation, and cloud migration services to optimize performance and scalability
                </li>
                <li>
                  <strong>UI/UX Design:</strong> User-centered design solutions that create intuitive and engaging digital experiences
                </li>
                <li>
                  <strong>Technical Consulting:</strong> Expert guidance on technology strategy, architecture decisions, and digital transformation initiatives
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Client Responsibilities</h2>
              <p>
                When engaging with Forciva's services, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide accurate and complete project requirements and business information</li>
                <li>Participate actively in project consultations and feedback sessions</li>
                <li>Provide timely responses to project-related communications</li>
                <li>Respect intellectual property rights and confidentiality agreements</li>
                <li>Use our delivered software solutions in compliance with applicable laws</li>
                <li>Maintain the confidentiality of any technical documentation provided</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
              <p>
                Forciva respects intellectual property rights and expects the same from our clients:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Delivered Solutions:</strong> Upon full payment, clients receive ownership rights to custom software developed specifically for their project, excluding Forciva's proprietary tools and methodologies
                </li>
                <li>
                  <strong>Pre-existing Technology:</strong> Forciva retains ownership of pre-existing tools, frameworks, and methodologies used in project delivery
                </li>
                <li>
                  <strong>Third-party Components:</strong> Open-source and third-party components remain subject to their respective licenses
                </li>
                <li>
                  <strong>Confidentiality:</strong> Both parties agree to maintain confidentiality of proprietary information shared during project collaboration
                </li>
                <li>
                  <strong>Client Materials:</strong> Clients retain ownership of their business data, content, and pre-existing intellectual property
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Project Terms and Service Delivery</h2>
              <p>
                Forciva's software development services are provided under the following terms:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Project Scope:</strong> All projects begin with a detailed scope definition and timeline agreement
                </li>
                <li>
                  <strong>Payment Schedule:</strong> Payment terms are established per project agreement, typically including milestone-based payments for larger projects
                </li>
                <li>
                  <strong>Delivery Standards:</strong> We deliver tested, documented software solutions that meet agreed-upon specifications
                </li>
                <li>
                  <strong>Support Period:</strong> Initial support period is included with each project as specified in the project agreement
                </li>
                <li>
                  <strong>Change Requests:</strong> Scope changes are documented and may affect timeline and budget as mutually agreed
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                While Forciva strives to deliver high-quality software solutions, our liability is limited as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Service Limitations:</strong> Our software development services are provided on an "as is" basis following industry best practices
                </li>
                <li>
                  <strong>Indirect Damages:</strong> Forciva shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from our services
                </li>
                <li>
                  <strong>Maximum Liability:</strong> Our total liability shall not exceed the amount paid for the specific project or service giving rise to the claim
                </li>
                <li>
                  <strong>Third-party Integration:</strong> We are not responsible for issues arising from third-party services or systems beyond our control
                </li>
                <li>
                  <strong>Data Protection:</strong> While we implement security best practices, clients are responsible for their own data backup and recovery procedures
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Project Completion and Termination</h2>
              <p>
                Project relationships with Forciva are governed by the following termination terms:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Project Completion:</strong> Projects are considered complete upon delivery of agreed-upon deliverables and client acceptance
                </li>
                <li>
                  <strong>Early Termination:</strong> Either party may terminate a project with 30 days written notice, with payment due for completed work
                </li>
                <li>
                  <strong>Breach of Contract:</strong> Material breach by either party may result in immediate termination with appropriate legal remedies
                </li>
                <li>
                  <strong>Transition Support:</strong> Upon project completion or termination, Forciva provides reasonable transition support as specified in the project agreement
                </li>
                <li>
                  <strong>Post-Termination:</strong> Confidentiality obligations and intellectual property arrangements survive termination of the service relationship
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
              <p>
                These Terms of Service shall be interpreted and governed by applicable software development industry standards and the laws of the jurisdiction where Forciva operates, without regard to conflict of law provisions. Any disputes arising from these terms shall be resolved through professional mediation or arbitration as appropriate for business-to-business software development contracts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-2">
                <p>Email: legal@forciva.com</p>
                <p>Business Inquiries: contact@forciva.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide reasonable notice prior to any new terms taking effect. Continued use of our services after changes become effective constitutes acceptance of the revised terms.
              </p>
            </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
