import React from "react";

const Dummy = () => {
  return (
    <div>
      {
        // This style will be applied to all the h3 tags in the application if global is written there
      }
      <style jsx global>
        {`
          h3 {
            background-color: yellow;
          }
        `}
      </style>
      <h3>dummy</h3>
    </div>
  );
};

export default Dummy;
