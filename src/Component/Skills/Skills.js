import "../Home/Home.css";
import "../../styles.css";
import { MdOutlineAssignmentInd } from "react-icons/md";
export default (props) => {
  return (
    <>
      <div className="box-center-row" id="Skills">
        <div className="subTitle">
          <h2>
            {" "}
            <MdOutlineAssignmentInd className="avatar" />
            Skills
          </h2>
        </div>
        <div className="Skills">
          <div className="grid-container">
            {props?.skills.map((i) => (
              <div className="grid-item">
                <div className="Cards">
                  <div className="Card-header">
                    <h2>
                      {i.title} {/* <span>subTitle</span> */}
                    </h2>
                    <div className="card-avatar">
                      <h2>{i.efficiency}</h2>
                    </div>
                  </div>
                  <h2 className="content">{i.description}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
