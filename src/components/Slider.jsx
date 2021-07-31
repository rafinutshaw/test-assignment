import { useEffect } from "react";

const Slider = ({ Values, onUpdate }) => {
  const UpdateClicked = (isIncrement) => {
    if (onUpdate) {
      if (isIncrement)
        onUpdate({
          ...Values,
          selectedIndex:
            Values.selectedIndex == Values.marks.length - 1
              ? 0
              : Values.selectedIndex + 1,
        });
      else {
        onUpdate({
          ...Values,
          selectedIndex:
            Values.selectedIndex == 0
              ? Values.selectedIndex.length - 1
              : Values.selectedIndex - 1,
        });
      }
    }
  };

  console.log(Values);

  return (
    <>
      {Values?.marks?.length > 0 ? (
        <div className="d-flex justify-content-between">
          <div
            className="d-flex flex-column justify-content-center"
            onClick={() => UpdateClicked(false)}
          >
            <i class="fas fa-angle-left"></i>
          </div>
          <div
            className="px-2"
            key={
              Values?.marks?.length > 0
                ? "Sem " + Values.marks[Values.selectedIndex].semester
                : ""
            }
          >
            {Values?.marks?.length > 0
              ? "Sem " + Values.marks[Values.selectedIndex].semester
              : ""}
          </div>
          <div
            className="d-flex flex-column justify-content-center"
            onClick={() => UpdateClicked(true)}
          >
            <i class="fas fa-angle-right "></i>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Slider;
