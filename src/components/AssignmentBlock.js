import React, { useEffect, useState } from "react";
import { ASSIGNMENTS } from "../__mocks__/data";

const AssignmentBlock = () => {
  const [state, setState] = useState({
    assignments: ASSIGNMENTS,
    selectedIndex: -1,
  });
  // useEffect(() => {
  //   sortTable();
  // }, []);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formatDate = (date) => {
    let dateArray = date.split("/");
    let day = formatDay(parseInt(dateArray[1]));

    const month = months[parseInt(dateArray[0]) - 1];
    const year = dateArray[2];
    return day + " " + month + ", " + year;
  };

  const formatDay = (i) => {
    console.log(parseInt(i));
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  };

  const onSubjectChange = (value) => {
    console.log(value.target.value);
    setState({ ...state, selectedIndex: value.target.value });
  };

  const getRows = () => {
    if (state.selectedIndex != -1) {
      return state.assignments.filter((e) => e.id == state.selectedIndex);
    } else return state.assignments;
  };

  // const sortTable = () => {
  //   var table, rows, switching, i, x, y, shouldSwitch;
  //   table = document.getElementById("myTable");
  //   switching = true;
  //   /*Make a loop that will continue until
  //   no switching has been done:*/
  //   while (switching) {
  //     //start by saying: no switching is done:
  //     switching = false;
  //     rows = table.rows;
  //     /*Loop through all table rows (except the
  //     first, which contains table headers):*/
  //     for (i = 1; i < rows.length - 1; i++) {
  //       //start by saying there should be no switching:
  //       shouldSwitch = false;
  //       /*Get the two elements you want to compare,
  //       one from current row and one from the next:*/
  //       x = rows[i].getElementsByTagName("TD")[3];
  //       y = rows[i + 1].getElementsByTagName("TD")[3];
  //       //check if the two rows should switch place:
  //       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
  //         //if so, mark as a switch and break the loop:
  //         shouldSwitch = true;
  //         break;
  //       }
  //     }
  //     if (shouldSwitch) {
  //       /*If a switch has been marked, make the switch
  //       and mark that a switch has been done:*/
  //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  //       switching = true;
  //     }
  //   }
  // };

  return (
    <>
      <div className="p-4">
        <span className="cardName fw-bold">Assignments</span>
        <select
          className="ms-3"
          data-testid="select-subject"
          onChange={onSubjectChange}
        >
          <option value={-1}>Select Subject</option>
          {state.assignments.map((item) => {
            return <option value={item.id}>{item.subject}</option>;
          })}
        </select>
      </div>

      <div className="pb-4">
        <table class="table" id="myTable">
          <thead>
            <tr>
              <th class="headRow ps-4" scope="col">
                Subject
              </th>
              <th class="headRow" scope="col">
                Teacher
              </th>
              <th class="headRow" scope="col">
                Status
              </th>
              <th class="headRow pe-4" scope="col">
                Submission Date
              </th>
            </tr>
          </thead>
          <tbody>
            {getRows().map((item) => {
              return (
                <tr>
                  <td scope="row" className="ps-4">
                    {item.subject}
                  </td>
                  <td class="text-truncate" style={{ maxWidth: "150px" }}>
                    {item.teachers}
                  </td>
                  <td>{item.status}</td>
                  <td className="pe-4">{formatDate(item.date)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .cardName {
          color: var(--dark-gray);
        }
        .headRow {
          background-color: var(--gray-200) !important;
          border-bottom-color: var(--light-gray) !important;
        }
        th,
        td {
          color: var(--gray-400);
          opacity: 1 !important;
          height: 45px;
        }
      `}</style>
    </>
  );
};

export default AssignmentBlock;
