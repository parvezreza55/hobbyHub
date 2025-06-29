import React from "react";

const Riview = () => {
  return (
    <div className="w-9/12 mx-auto py-10 mb-20">
      <h1 className="text-xl md:text-3xl font-bold text-center py-5">FAQ</h1>
      <div className="collapse collapse-plus bg-base-200 dark:border-gray-50 border-2 border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          How can I update Group?
        </div>
        <div className="collapse-content text-sm">
          Click the "My Group" and follow the uddate Icon
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 dark:border-gray-50 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Want to see Details. What should I do?
        </div>
        <div className="collapse-content text-sm">
          Click on Show more button
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 dark:border-gray-50 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How can I delete group?
        </div>
        <div className="collapse-content text-sm">
          Click the "My Group" and follow the Delete Icon
        </div>
      </div>
    </div>
  );
};

export default Riview;
