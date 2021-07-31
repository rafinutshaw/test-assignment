import React, { useEffect, useRef, useState } from "react";
import { MARKS } from "../__mocks__/data";
import CGPACards from "./CGPACards";
import Slider from "./Slider";

/**
 * Kindly use the mock data provided for rendering the performance block component
 * use CGPACards component to design CGPA cards
 */

const PerformanceBlock = () => {
  const scrollElement = useRef(null);
  const [state, setState] = useState({ marks: [], selectedIndex: 0 });

  const scrollUpdate = (isLeft) => {
    const value = isLeft ? -144 : 144;
    if (scrollElement?.current) {
      scrollElement.current.scrollLeft += value;
    }
    console.log(isLeft);
    console.log(scrollElement.current.scrollLeft);
  };

  useEffect(() => {
    // state.marks = MARKS;
    setState({ ...state, marks: MARKS });
    console.log(state);
  }, []);

  const willShowArrow = (isLeft) => {
    if (isLeft) {
      if (scrollElement?.current) {
        if (scrollElement.current.scrollLeft > 0) return true;
      }
    }
    return false;
  };

  const onSemesterChange = (value) => {
    console.log(value);
    setState({ ...state, selectedIndex: value.selectedIndex });
  };

  return (
    <>
      <div className="position-relative">
        <div className="d-flex justify-content-between my-2 mb-0 ">
          <div className="perfHead fw-bold">Performance (CGPA)</div>
          <div>
            <Slider onUpdate={onSemesterChange} Values={state} />
          </div>
        </div>
        <div className="position-absolute d-flex justify-content-between my-4 w-100 arrow-wrapper">
          <div
            className={`d-flex flex-column justify-content-center `}
            onClick={() => scrollUpdate(true)}
          >
            <i class="fas fa-angle-left "></i>
          </div>
          <div
            className="d-flex flex-column justify-content-center"
            onClick={() => scrollUpdate(false)}
          >
            <i class="fas fa-angle-right "></i>
          </div>
        </div>
        <div className=" my-4 d-flex overflow-hidden " ref={scrollElement}>
          {/* <div className="position-absolute d-flex justify-content-between w-100 arrow-wrapper"></div> */}
          {state?.marks?.length > 0 &&
            Object.keys(state.marks[state.selectedIndex].cgpa).map((key) => {
              return (
                <div className="mx-2">
                  {" "}
                  <CGPACards
                    name={key}
                    value={state.marks[state.selectedIndex].cgpa[key]}
                  />
                </div>
              );
              // return <div>asd</div>;
            })}
        </div>
      </div>
      <style jsx>{`
        .arrow-wrapper {
          height: 100px;
        }
        .perfHead {
          color: var(--dark-gray);
        }
      `}</style>
    </>
  );
};

export default PerformanceBlock;
