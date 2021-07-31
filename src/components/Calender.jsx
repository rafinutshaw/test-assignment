const Calender = () => {
  return (
    <>
      <div className="border-0">
        <div className="">
          <div className="calenderHead fw-bold mb-3">Schedule</div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                  <div>Monday</div>
                  <div>13</div>
                </th>
                <th className="active">
                  <div>Tuesday</div>
                  <div className="active-date">14</div>
                </th>
                <th>
                  <div>Wednesday</div>
                  <div>15</div>
                </th>
                <th>
                  <div>Thursday</div>
                  <div>16</div>
                </th>
                <th>
                  <div>Friday</div>
                  <div>17</div>
                </th>
                <th>
                  <div>Sat/Sun</div>
                  <div>18-19</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="event event-green">Accounts</div>
                </td>
                <td>
                  <div className="event event-orange">Income Tax</div>
                </td>
                <td rowSpan="5">
                  <div className="event event-gray">Off Day</div>
                </td>
                <td>
                  <div className="event event-purple">French</div>
                </td>
                <td>
                  <div className="event event-orange">Income Tax</div>
                </td>
                <td rowSpan="5">
                  <div className="event event-gray">Off Day</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="event event-orange">Income Tax</div>
                </td>
                <td>
                  <div className="event event-blue">Bus. Study</div>
                </td>
                <td>
                  <div className="event event-light-purple">Economics</div>
                </td>
                <td>
                  <div className="event event-blue">Bus. Study</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="event event-blue">Bus. Study</div>
                </td>
                <td>
                  <div className="event event-green">Accounts</div>
                </td>
                <td>
                  <div className="event event-blue">Bus. Study</div>
                </td>
                <td>
                  <div className="event event-gray">Project Submission</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="event event-gray">French</div>
                </td>
                <td rowSpan="2">
                  <div className="event event-orange">Income Tax Big</div>
                </td>
                <td>
                  <div className="event event-orange">Income Tax</div>
                </td>
                <td>
                  <div className="event event-purple">French</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="event event-light-purple">Economics</div>
                </td>
                <td>
                  <div className="event event-gray">Seminar</div>
                </td>
                <td>
                  <div className="event event-red">Comm. Skill</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>{`
        .calenderHead {
          color: var(--dark-gray);
        }
        th,
        td {
          height: 64px;
          width: 210px;
        }
        th:not(.active) {
          font-weight: normal;
          opacity: 0.7;
        }
        th.active:nth-child(2) {
          position: relative;
        }
        .active-date:after {
          content: "";
          position: absolute;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background-color: rgb(135, 191, 199);
          top: 40px;
          left: 35px;
        }
        .event {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: oldlace;
          margin: 5px;
          height: calc(100% - 5px);
          width: calc(100% - 5px);
          border-radius: 5px;
          position: relative;
          font-weight: 500;
        }
        .event:before {
          content: "";
          height: 100%;
          width: 5px;
          background-color: orange;
          border-radius: 5px;
          position: absolute;
          left: 0;
        }

        .event-green {
          background-color: rgb(180, 221, 197);
          color: rgb(46, 166, 95);
        }

        .event-green:before {
          background-color: rgb(46, 166, 95);
        }

        .event-orange {
          background-color: rgb(244, 226, 164);
          color: rgb(234, 150, 77);
        }

        .event-orange:before {
          background-color: rgb(234, 150, 77);
        }

        .event-blue {
          background-color: rgb(172, 222, 240);
          color: rgb(46, 148, 205);
        }

        .event-blue:before {
          background-color: rgb(46, 148, 205);
        }

        .event-gray {
          background-color: rgb(240, 240, 241);
          color: rgb(189, 189, 188);
        }

        .event-gray:before {
          background-color: rgb(189, 189, 188);
        }

        .event-purple {
          background-color: rgb(200, 189, 221);
          color: rgb(110, 88, 165);
        }

        .event-purple:before {
          background-color: rgb(110, 88, 165);
        }

        .event-red {
          background-color: rgb(250, 191, 190);
          color: rgb(225, 87, 87);
        }

        .event-red:before {
          background-color: rgb(225, 87, 87);
        }

        .event-light-purple {
          background-color: rgb(211, 178, 212);
          color: rgb(127, 88, 164);
        }

        .event-light-purple:before {
          background-color: rgb(127, 88, 164);
        }
      `}</style>
    </>
  );
};

export default Calender;
