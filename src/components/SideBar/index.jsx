const SideBar = () => {
  return (
    <>
      <div className="sidebarContent">
        <ul className="fw-bold sideItems d-flex flex-column h-100">
          <li className="headItem item my-5">University</li>

          <li className="item my-4 bottomItem">Dashboard</li>
          <li className="item my-4">Calender</li>
          <li className="item my-4">Teachers</li>
          <li className="item my-4">Course</li>
          <li className="item my-4 curved-border">Attendance</li>
          <li className="item my-4">Assingment</li>
          <li className="item mb-4 mt-auto bottomItem">David Smith</li>
          {/* <div className="sidebar-footer">
            <li className=" item bottomItem">David Smith</li>
          </div> */}
        </ul>
      </div>
      <style jsx>{`
        .sidebarContent {
          height: 100%;
          width: 215px;
          border-right: 2px solid var(--gray-400);
        }
        .sideItems {
          list-style-type: none;
        }
        .sideItems li {
          border-left: 2px solid grey;
          margin: 10px;
        }
        .headItem {
          color: var(--light-blue) !important;
        }
        .item {
          color: var(--gray-400);
          padding-left: 1em;
        }
        .bottomItem {
          color: var(--dark-gray);
        }
        .sidebar-footer {
          height: 50px;
          position: absolute;
          width: 100%;
          bottom: 0;
          list-style-type: none;
          padding-bottom: 5.5em;
        }
        .curved-border {
          position: relative;
          border: none !important;
        }
        .curved-border:before {
          content: "";
          position: absolute;
          height: 24px;
          width: 4px;
          border-radius: 0 50% 50% 0;
          background-color: gray;
          left: 0em;
        }
      `}</style>
    </>
  );
};

export default SideBar;
