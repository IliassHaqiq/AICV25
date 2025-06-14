import React from 'react';

const Registration = () => {
  const foreignRates = [
    { type: 'Regular Author', early: '400 USD', late: '450 USD' },
    { type: 'Student Author', early: '300 USD', late: '350 USD' },
    { type: 'Extra paper', early: '100 USD', late: '150 USD' },
    { type: 'Non Author', early: '150 USD', late: '200 USD' }
  ];

  const egyptianRates = [
    { type: 'Regular Author', early: '3 000 Egyptian pounds', late: '3 500 Egyptian pounds' },
    { type: 'Student Author', early: '2 500 Egyptian pounds', late: '3 000 Egyptian pounds' },
    { type: 'Extra paper', early: '500 Egyptian pounds', late: '600 Egyptian pounds' },
    { type: 'Non Author', early: '5 000 Egyptian pounds', late: '6 000 Egyptian pounds' }
  ];

  const moroccanRates = [
    { type: 'Regular Author', early: '1 900 MAD', late: '2 400 MAD' },
    { type: 'Student Author', early: '1 500 MAD', late: '1 900 MAD' },
    { type: 'Extra paper', early: '800 MAD', late: '1 000 MAD' },
    { type: 'Non Author', early: '1 200 MAD', late: '1 600 MAD' }
  ];

  return (
    <div className="registration-container">
      <h1 className="registration-title">Registration</h1>
      
      <div className="registration-deadline">
        Early Registration Deadline: October 01, 2025
      </div>

      <div className="registration-info">
        <p>
          Registration fees include access to all conference sessions, conference materials, 
          coffee breaks, and the conference dinner. Accommodation and travel expenses are not included.
        </p>
      </div>

      <div className="registration-rates">
        <h2 className="rate-title">Registration Rates for Foreign Participants</h2>
        <table className="registration-table">
          <thead>
            <tr>
              <th>Registration Type</th>
              <th>Before October 01, 2025</th>
              <th>After October 01, 2025</th>
            </tr>
          </thead>
          <tbody>
            {foreignRates.map((rate, index) => (
              <tr key={index}>
                <td>{rate.type}</td>
                <td className="early-rate">{rate.early}</td>
                <td className="late-rate">{rate.late}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="rate-title">Registration Rates for Egyptian Participants</h2>
        <table className="registration-table">
          <thead>
            <tr>
              <th>Registration Type</th>
              <th>Before October 01, 2025</th>
              <th>After October 01, 2025</th>
            </tr>
          </thead>
          <tbody>
            {egyptianRates.map((rate, index) => (
              <tr key={index}>
                <td>{rate.type}</td>
                <td className="early-rate">{rate.early}</td>
                <td className="late-rate">{rate.late}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="rate-title">Registration Rates for Moroccan Participants</h2>
        <table className="registration-table">
          <thead>
            <tr>
              <th>Registration Type</th>
              <th>Before October 01, 2025</th>
              <th>After October 01, 2025</th>
            </tr>
          </thead>
          <tbody>
            {moroccanRates.map((rate, index) => (
              <tr key={index}>
                <td>{rate.type}</td>
                <td className="early-rate">{rate.early}</td>
                <td className="late-rate">{rate.late}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registration; 