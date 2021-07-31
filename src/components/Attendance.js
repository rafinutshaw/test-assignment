import React from "react";

const Attendance = ({ value }) => {
  return (
    <>
      <div data-testid="attendance-card" className="attendanceCard">
        <div className="fw-bold">Attendance</div>
        <span className="font-size-xl fw-bold">{value}%</span>
      </div>
      <style jsx>{`
        .attendanceCard {
          color: var(--dark-gray);
        }
      `}</style>
    </>
  );
};

export default Attendance;
