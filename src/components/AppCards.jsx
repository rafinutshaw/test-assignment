const AppCard = ({ children, enablePadding = true }) => {
  return (
    <>
      <div className={`cardWrapper ${enablePadding ? "p-4" : ""}`}>
        {children ? children : ""}
      </div>
      <style jsx>{`
        .cardWrapper {
          background-color: white;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default AppCard;
