import "./ResultsSummary.css";
import Category from "./Category";
import Button from "./Button";

function ResultsSummary({ data }) {
  return (
    <div className="ResultsSummary">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-sm-6 result-section">
            <h3 className="result-header"> Your Result</h3>
            <p className="score">
              <span>76 </span> of 100
            </p>
            <h2>Great</h2>
            <h3 className="percentage">
              You scored higher than 65% of the people who have taken these
              tests.
            </h3>
          </div>

          <div className="col-12 col-sm-6 summary-section px-4">
            <h2>Summary</h2>

            <ul>
              {data.map((item, index) => (
                <Category data={item} key={index} />
              ))}
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsSummary;
