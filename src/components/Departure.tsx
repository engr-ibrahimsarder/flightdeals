
function Departure({segment}: any) {
  return (
    <div>
        <p>{segment?.departure?.at}</p>
    </div>
  )
}

export default Departure
