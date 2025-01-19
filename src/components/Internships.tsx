import React from "react";

interface InternshipItem {
  year: string;
  title: string;
  description?: string;
  logo?: string;
}

interface InternshipsProps {
  items: InternshipItem[];
}

const Internships: React.FC<InternshipsProps> = ({ items }) => {
  return (
    <div className="internships">
      {items.map((item) => (
        <div
          key={item.year}
          className="timeline-item pt-4 tablet:px-6 relative overflow-hidden"
        >
          <div className="relative w-14 h-14  hover:w-full internship-item-content flex items-center bg-internships-interncontainer p-2 rounded-xl transition-all duration-300 ease-in-out group">
            {item.logo && (
              <div className="flex-shrink-0">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="internship-item-logo w-10 h-auto"
                />
              </div>
            )}
            <div className="flex ml-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <div>
                <h3 className="font-bold text-sm">{item.title}</h3>
                {item.description && (
                  <p className="text-xs">{item.description}</p>
                )}
              </div>
              <p className="absolute right-0 top-4 text-md origin-center rotate-90">{item.year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Internships;
