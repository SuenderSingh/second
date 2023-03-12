import React, { useState } from "react";

function TodoItem() {
  const [toggle, setToggle] = useState(true);

  const show = () => {
    if (toggle === false) {
      const prom = new Promise((resolve, reject) => {
        resolve("Done");
      });
      prom.then(() => {
        setTimeout(() => {
          console.log("How are you");
        }, 1000);
      });
    }
  };

  show();
  return (
    <div>
      <input
        type="checkbox"
        value={toggle}
        onChange={() => {
          setToggle(false);
        }}
      />{" "}
      Checked Box value is Changed
    </div>
  );
}

export default TodoItem;
