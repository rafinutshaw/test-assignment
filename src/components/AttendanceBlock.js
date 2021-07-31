import React, { useState } from "react";
import { MARKS } from "../__mocks__/data";
import Attendance from "./Attendance";

const AttendanceBlock = () => {
  const [state, setState] = useState({ marks: MARKS, selectedIndex: 0 });

  const onSemesterChange = (value) => {
    console.log(value.target.value);
    setState({ ...state, selectedIndex: value.target.value - 1 });
  };

  const subjectShortToFullName = (shortName) => {
    switch (shortName) {
      case "accounts":
        return "Accounts";
      case "inc_tax":
        return "Inc. Tax";
      case "bus_study":
        return "Bus. Study";
      case "french":
        return "French";
      case "economics":
        return "Economics";

      case "com_skill":
        return "Com. Kkill";
      default:
        return "";
    }
  };

  const SubjectNumberElement = (name, value, classNA) => {
    return (
      <>
        <div>{name}</div>
        <div className={classNA}>{value}/100</div>
      </>
    );
  };

  return (
    <>
      <div className="d-flex">
        <div className="flex-grow-1 attendanceWrapper p-3 me-0">
          <Attendance value={state.marks[state.selectedIndex].attendance} />

          <div className="my-2">semester</div>
          <select data-testid="select-sem" onChange={onSemesterChange}>
            {state.marks.map((item) => {
              return (
                <option value={item.semester}>{"0" + item.semester}</option>
              );
            })}
          </select>
        </div>
        <div
          className=" d-flex flex-wrap p-3 ps-4"
          style={{ width: "260px", marginBottom: "-1.5rem" }}
        >
          {Object.keys(state.marks[state.selectedIndex].total).map((key) => {
            return (
              <div
                className={`mr-4 mb-4`}
                style={{ width: "100px", height: "50px" }}
              >
                {SubjectNumberElement(
                  subjectShortToFullName(key),
                  // key,
                  // subjectShortToFullName(key),
                  state.marks[state.selectedIndex].total[key],
                  key == "french" ? "lightOrengeText" : ""
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        select {
          color: var(--gray-400);
          border: 1px solid var(--gray-400);
          border-radius: 5px;
        }
        .attendanceWrapper {
          border-right: 2px solid var(--gray-400);
        }
        .lightOrengeText {
          color: var(--orange);
        }
      `}</style>
    </>
  );
};

export default AttendanceBlock;
