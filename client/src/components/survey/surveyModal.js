import React from "react";

export default function SurveyModal({ onClose, results, data }) {
  return (
    <div className="modal_card">
      <button className="btn btn-danger btn_close" onClick={onClose}>
        Close
      </button>
      <div className="card ctn">
        <div className="card-body justify-content-center">
          <header className="card-title text-center px-5 mb-1">
            <p className="lead h5">Your answers</p>
            <hr />
          </header>
          <section className="content">
            <ul>
              {results.map((result, i) => (
                <li key={i} className="mb-6">
                  <p>
                    <strong>{result.q}</strong>
                  </p>
                  <p
                    className={
                      result.a === data[i].answer
                        ? "bg-success text-white p-2"
                        : "bg-danger text-white p-2"
                    }
                  >
                    Your answer: {result.a}
                  </p>
                  {result.a !== data[i].answer && (
                    <p className="p-2">Correct answer: {data[i].answer}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
