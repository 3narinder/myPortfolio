import React from "react";
import data from "../data/index.json";

const BigProjects = () => {
  return (
    <div>
      <h2 className="section--heading text-center md:text-left text-2xl tracking-wide mb-4 md:mb-8">
        Major Projects
      </h2>
      <div className="portfolio--section--container">
        {data?.big_projects?.map((item, index) => (
          <div key={item?.id} className="portfolio--section--card">
            <div className="portfolio--section--img p-4">
              <img
                className="lg:h-80 md:80 h-auto w-auto overflow-hidden rounded-md"
                src={item.src}
                alt="Placeholder"
              />
            </div>

            {/* title */}
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title font-semibold">
                  {item.title}
                </h3>
                <p className="text-md mt-2">{item.description}</p>

                <div className="flex flex-wrap items-center gap-2 mt-4">
                  {item?.technology?.map((tech) => (
                    <div className="px-4 py-2 capitalize text-sm rounded-md bg-blue-200">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={item.link}
                target="_blank"
                className="text-sm portfolio--link"
              >
                {item.website}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigProjects;
