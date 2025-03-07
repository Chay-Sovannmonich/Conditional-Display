function Scores({ courseName, courseResults }) {
    // Calculate statistics (optional bonus)
    const scores = courseResults.map((result) => result.score);
    const average = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2);
    const min = Math.min(...scores);
    const max = Math.max(...scores);
  
    return (
      <div className="scores">
        <h1>{courseName}</h1>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {courseResults.map((result, index) => (
              <tr key={index}>
                <td>{result.firstName}</td>
                <td>{result.lastName}</td>
                <td className={result.score < 50 ? "warning" : ""}>
                  {result.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Optional: Statistics panel */}
        <div className="statistics">
          <p>Average: {average}</p>
          <p>Min: {min}</p>
          <p>Max: {max}</p>
        </div>
      </div>
    );
  }
  
  export default Scores;