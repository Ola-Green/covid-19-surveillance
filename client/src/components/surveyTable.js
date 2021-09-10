import React from "react";
import Divider from "@material-ui/core/Divider";

export default function SurveyTable({ surveys, result }) {
  if (result === 0)
    return (
      <section className="mt-3 mb-3 py-2 px-5 text-center bg-primary covid-section text-white rounded">
        <h4>Take a covid-19 survey today even if you feel fine.Thank you.</h4>
      </section>
    );
  return (
    <>
      <div className=" text-center align-items-center align-content-center">
        <h3>Your Covid-19 Survey Result</h3>
        <Divider />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Survey Questions</th>
            <th>Replies</th>
          </tr>
        </thead>
        {surveys.map((suv) => (
          <tbody key={suv._id}>
            <tr>
              <th>1</th>
              <td>Have you been having frequent fever?</td>
              <td>{suv.fever}</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Have you been coughing more than usual?</td>
              <td>{suv.cough}</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Have you been having diarrhoea?</td>
              <td>{suv.diarrhoea}</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Have you been nauseous and vomitting?</td>
              <td>{suv.nauseaVomit}</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Have you been having headache</td>
              <td>{suv.headache}</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Have you been experiencing rashes?</td>
              <td>{suv.rash}</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Have you been having convulsion?</td>
              <td>{suv.convulsion}</td>
            </tr>
            <tr>
              <th>8</th>
              <td>
                Have you been having experiencing disorder in your state of
                consciusness?
              </td>
              <td>{suv.disorderConsciousness}</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Have you been bleeding a lot?</td>
              <td>{suv.bleedingDisorder}</td>
            </tr>
            <tr>
              <th>10</th>
              <td>Have you been having sore throat?</td>
              <td>{suv.soreThroat}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <section className="mt-3 mb-3 py-3 px-3 text-center bg-success text-white rounded">
        <h4>
          Please be informed that if you answered yes to a significant number of
          the above survey,please consider visiting the nearest health care
          center around you to get tested for covid-19.Together we can make our
          world safer for ourselves and our children.Thank you.
        </h4>
      </section>
    </>
  );
}
