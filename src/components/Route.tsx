
function Route({segment}: any) {
  return (
    <div>
       <p>{segment?.departure?.iataCode} - {segment?.arrival?.iataCode}</p>
    </div>
  )
}

export default Route
