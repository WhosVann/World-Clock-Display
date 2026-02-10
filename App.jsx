import DigitalClock from "./DigitalClock"

function App() {

  return (
    <>
      <DigitalClock label="New York" zone="America/New_York"/>
      <DigitalClock label="Tokyo" zone="Asia/Tokyo"/>
      <DigitalClock label="London" zone="Europe/London"/>
      <DigitalClock label="Sydney" zone="Australia/Sydney"/>
    </>
  )
}

export default App
