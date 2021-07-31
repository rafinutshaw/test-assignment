import AppCard from "./AppCards";
import AssignmentBlock from "./AssignmentBlock";
import AttendanceBlock from "./AttendanceBlock";
import Calender from "./Calender";
import PerformanceBlock from "./PerformanceBlock";
import SideBar from "./SideBar";
import Updates from "./Updates";

const AppContainer = () => {
  return (
    <>
      <div className="d-flex ">
        <div className="sideBarWrapper">
          <SideBar />
        </div>
        <div className="mainContents">
          <div className="mainHead d-flex">
            <div
              className="font-size-xl fw-bold p-4"
              style={{ color: "var(--dark-gray)" }}
            >
              Dashboard
            </div>
            <div className="flex-grow-1">
              <Updates />
            </div>
          </div>
          <div className="d-flex ms-4">
            <div className="me-4" style={{ width: "30%" }}>
              <div className="mb-4">
                <AppCard enablePadding={false}>
                  <AttendanceBlock />
                </AppCard>
              </div>

              <AppCard>
                <PerformanceBlock />
              </AppCard>
            </div>
            <div className="flew-grow-1">
              <AppCard>
                <Calender />
              </AppCard>
            </div>
          </div>
          <div className="d-flex ms-4 mt-4">
            <div>
              <AppCard enablePadding={false}>
                <AssignmentBlock />
              </AppCard>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .mainContents {
          background-color: var(--skyblue-400);
          flex-grow: 100;
        }
        .sideBarWrapper {
          min-height: 100vh;
        }
      `}</style>
    </>
  );
};

export default AppContainer;
