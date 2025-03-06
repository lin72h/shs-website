import SectionTitle from "../Common/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-28">
      <div className="container max-w-6xl mx-auto px-6">
        <SectionTitle
          mainTitle="CONTACT"
          title="Engineering Solutions for Your Projects"
          paragraph="Our team of qualified engineers is ready to assist with your infrastructure, development, and construction projects."
          center
        />
        <div className="-mx-4 flex justify-center mt-16">
          <div className="w-full px-4 lg:w-9/12">
            <form className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-dark">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      className="input-field border-0 bg-white shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-dark">Organization</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Organization"
                      className="input-field border-0 bg-white shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-dark">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="input-field border-0 bg-white shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-dark">Phone Number</label>
                    <input
                      type="text"
                      name="phone number"
                      placeholder="Phone number"
                      className="input-field border-0 bg-white shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-dark">Project Details</label>
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="Project details and requirements"
                      className="input-field resize-none border-0 bg-white shadow-sm"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="pt-4 text-center">
                    <button className="mx-auto inline-flex items-center justify-center rounded-lg bg-primary px-9 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-xl">
                      Submit Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
