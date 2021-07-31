const Updates = () => {
  return (
    <>
      <div className=" d-flex justify-content-between contentWrapper p-3 pe-0 font-size-m">
        <div className="fw-bold">
          <div>Updates</div>
          <span>05</span>
        </div>
        <div className="fw-bold">
          <span>
            All classes are cancelled for 24th July 2020, due to mandatory
            carfew. No calsses will resume till further notice.
          </span>
        </div>
        <div className="divider"></div>
        <div className="fw-bold">
          <span>Semester 6 results will be declared on 31st jusy 2020</span>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="rotateddate">02/05</div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <i class="fas fa-angle-right fw-bold"></i>
        </div>
      </div>
      <style jsx>{`
        .contentWrapper {
          background-color: var(--light-blue);
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          color: var(--dark-blue);
        }
        .contentWrapper > div {
          margin-right: 5px;
          margin-left: 5px;
        }
        .rotateddate {
          -webkit-transform: rotate(-90deg);
        }
        .divider {
          border-left: 2px solid;
          border-color: var(--dark-blue);
        }
      `}</style>
    </>
  );
};

export default Updates;
