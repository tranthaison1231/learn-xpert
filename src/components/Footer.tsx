export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mx-auto mb-6 md:mb-0">
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
              Get in touch
            </h2>
            <p className="text-xs font-normal text-gray-500 tracking-widest pb-8">
              the quick fox jumps over the
              <br /> lazy dog
            </p>

            <div className="flex mt-4  sm:mt-0">
              <a href="#" className="text-[#23856D] hover:text-gray-900 ">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-[#23856D] hover:text-gray-900  ms-5">
                <svg
                  className="w-4 h-4 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-[#23856D] hover:text-gray-900  ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-2 gap-8 sm:gap-6  ">
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                Company Info
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Carrier
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                Features
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Business Marketing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    User Analytics
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Ulimited Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center justify-center ">
          <span className="text-sm text-gray-500 sm:text-center ">
            Made With Love By Figmaland All Right Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
