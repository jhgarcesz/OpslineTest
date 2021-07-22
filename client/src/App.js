import React from "react";
import { getAllVulnerabilities } from './services/vulnerabilityService';
import { Spinner } from 'react-bootstrap';
import { Vulnerabilities } from './components/Vulnerabilities';

function App() {
  
  const [vulnerabilities, setVulnerabilities] = React.useState(null);

  // calling our api when component did mount.
  React.useEffect(() => {
      getAllVulnerabilities()
      .then(vulnerabilities => {
        setVulnerabilities(vulnerabilities);
      });
  }, []);

  // We are rendering our data as a table when data is loaded.
  const renderVulnerabilityTable = (vulnerabilities) => {
      return (
        <Vulnerabilities vulnerabilities={vulnerabilities}/>
      );
  }

  return (
    <React.Fragment>
      { !vulnerabilities ?
        <Spinner animation="border" role="status"/> : 
        renderVulnerabilityTable(vulnerabilities) }
    </React.Fragment>
  );
}

export default App;
