import "./ResultsSummary.css";

function ResultsSummary() {
  return (
    <div className="ResultsSummary">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-6 result-section">
            <h3> Your Result</h3>
            <p>
              <span>76 </span> of 100
            </p>
            <h2>Great</h2>
            <h3>
              You scored higher than 65% of the people who have taken these
              tests.
            </h3>
          </div>

          <div className="col-12 col-md-6">
            <h2>Summary</h2>

            <ul>
              <li>
                <span> Reaction</span> <span> 80/100 </span>
              </li>

              <li>
                <span> Memory</span> <span> 92/100 </span>
              </li>

              <li>
                <span> Verbal </span> <span> 61/100 </span>
              </li>

              <li>
                <span> Visual </span> <span> 72/100 </span>
                          </li>
                          
                      </ul>
                      
                      <button>Continue</button>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default ResultsSummary;
