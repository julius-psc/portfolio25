import React from "react";

interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  logo?: string;
}

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => (
  <div className="relative"> {/* Added relative positioning */}
    {items.map((item, index) => (
      <div key={item.date} className="flex mb-8">
        <div className="relative mr-4"> {/* Container for dot and line */}
          <div className="w-14 border-[1px] border-opacity-15 border-education-outline  h-14 rounded-xl bg-education-square z-10 flex items-center justify-center"> {/* Dot */}
          {item.logo && <img src={item.logo} alt={item.title + " logo"} className="w-10 max-w-full max-h-full"/>}
          </div>
          {index < items.length - 1 && ( // Vertical line
            <div className="absolute left-1/2 h-full border-r-4 border-education-square -ml-[2px] -z-10"></div>
          )}
        </div>
        <div>
          <h3 className="text-xs font-medium text-education-years">{item.date}</h3>
          <p className="text-sm">{item.title}</p>
          {item.description && <p className="text-xs text-general-paragraphtext opacity-40">{item.description}</p>}
        </div>
      </div>
    ))}
  </div>
);

export default Timeline;