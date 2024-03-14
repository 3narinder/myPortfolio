import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <h2 className="skills--section--heading">My Expertise</h2>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="flex items-center gap-4">
              <div className="skills--section--img">
                <img className="h-10 w-10" src={item.src} alt="Product Chain" />
              </div>

              <h3 className="skills--section--title">{item.title}</h3>
            </div>

            {/* description */}
            <div className="flex flex-col">
              <p className="skills--section--description">{item.description}</p>

              {/* experience */}
              <h2 className="mt-2 px-1 flex items-center">
                <span className="text-base font-semibold text-gray-800/70 tracking-wider mr-2">
                  Experience:
                </span>
                <span className="text-sm font-semibold text-gray-800/80">
                  {item.experience} years
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
