export default function FooterContact() {
  return (
    <div className="mb-10">
      <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-[44px]">
        Let&#39;s Talk!
      </h2>
      <h3 className="mb-4 text-2xl font-bold text-white opacity-80">
        Contact Info
      </h3>
      <div className="space-y-3">
        <p className="flex items-center text-base font-medium text-body-color">
          <svg className="mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@shsengineering.co.nz
        </p>
        <div className="flex text-base font-medium text-body-color">
          <svg className="mr-3 h-5 w-5 text-primary mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="mb-1">110 Carlton Gore Road</p>
            <p className="mb-1">Newmarket, Auckland 1023</p>
            <p>New Zealand</p>
          </div>
        </div>
        <p className="flex items-center text-base font-medium text-body-color">
          <svg className="mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +64 21 678 280
        </p>
      </div>
    </div>
  );
}
