import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* <div class="sm:flex sm:items-center sm:justify-between">
          <div className="text-gray-700/80 text-xl font-bold tracking-wider">
            PORTFOLIO
          </div>
          <div className="flex flex-wrap justify-between items-center mb-6 gap-20 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <div className="">
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-lg block"
              >
                HOME
              </Link>
            </div>

            <div>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-lg"
              >
                ABOUT ME
              </Link>
            </div>
            <div>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-lg"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div> */}
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
    </footer>
  );
}

export default Footer;
