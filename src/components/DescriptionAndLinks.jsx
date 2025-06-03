import React from "react";

export default function DescriptionAndLinks({ list }) {
  return (
    <div className="mx-auto">
      <ul className="list-disc w-full pl-6 md:pl-0">
        {list.map((item) => (
          <li className="mb-2">
            {item.description}
            <div>
              <a href={item.href}>
                <span>
                  Click <strong>here 👈 </strong>
                </span>
              </a>
              {`or copy: ${item.href}`}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
