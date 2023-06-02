import TabItems, { TabValue } from "@/data/tab";
import cn from "@/utils/cn";
import React from "react";

export const CategoryTab = () => {
  const [tabActive, setTabActive] = React.useState<TabValue>(1);
  const onChange = (value: TabValue) => {
    setTabActive(value);
  };
  return (
    <div className="mt-3">
      <ul className="flex gap-3">
        {TabItems.map(({ label, value }) => (
          <li key={value}>
            <button
              onClick={() => onChange(value)}
              className={cn(
                "py-3 px-4",
                tabActive === value && "border-b-4 border-red-500"
              )}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryTab;
