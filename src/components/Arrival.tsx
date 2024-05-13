
function Arrival({segment}: any) {
  return (
    <div>
      <p>{segment?.arrival?.at}</p>
    </div>
  )
}

export default Arrival
