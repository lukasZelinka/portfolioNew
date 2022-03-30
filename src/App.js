import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);
  return (
    <>
      {loading ? (
        <div className="centerWrapper">
          <RingLoader color={"#9DAAF2"} loading={loading} size={150} />
        </div>
      ) : (
        <p>App</p>
      )}
    </>
  );
}

export default App;
