import React from "react";

const CGPACards = ({ name, value }) => {
  console.log(name);
  console.log(value);
  return (
    <div data-testid="cgpa-cards">
      <div className="blockContainer">
        <div className="font-size-xl">{value}</div>
        <div>{name}</div>
      </div>
      <style jsx>{`
        .blockContainer {
          text-align: center;
          border: 2px solid var(--gray-400);
          border-radius: 5px;
          height: 100px;
          width: 100px;
          color: var(--dark-gray);
        }
      `}</style>
    </div>
  );
};

export default CGPACards;
