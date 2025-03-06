import SectionTitle from "../Common/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-[120px]">
      <div className="container">
        <SectionTitle
          mainTitle="CONTACT"
          title="Engineering Solutions for Your Projects"
          paragraph="Our team of qualified engineers is ready to assist with your infrastructure, development, and construction projects."
          center
        />
        <div className="-mx-4 flex justify-center">
          <div className="w-full px-4 lg:w-9/12">
            <form>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="company"
                      placeholder="Organization"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="phone number"
                      placeholder="Phone number"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="Project details and requirements"
                      className="input-field resize-none"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="pt-4 text-center">
                    <button className="mx-auto inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-signUp">
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
