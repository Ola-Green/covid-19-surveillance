import React from "react";

export default function SurveyTable({ surveys, result }) {
  return (
    <div className="users_table">
      <h2 className="text-center">Survey Details</h2>
      <div style={{ overflowX: "auto" }}>
        <table className="users">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fever</th>
              <th>Cough</th>
              <th>Diarrhoea</th>
              <th>Nausea and Vomitting</th>
              <th>Headache</th>
              <th>Rash</th>
              <th>Convulsion</th>
              <th>Consciousness Disorder</th>
              <th>Bleeding Disorder</th>
              <th>Sore Throat</th>
            </tr>
          </thead>
          <tbody>
            {surveys.map((suv) => (
              <tr key={suv._id}>
                <td>{suv._id}</td>
                <td>{suv.fever}</td>
                <td>{suv.cough}</td>
                <td>{suv.diarrhoea}</td>
                <td>{suv.nauseaVomit}</td>
                <td>{suv.headache}</td>
                <td>{suv.rash}</td>
                <td>{suv.convulsion}</td>
                <td>{suv.disorderConsciousness}</td>
                <td>{suv.bleedingDisorder}</td>
                <td>{suv.soreThroat}</td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
}
