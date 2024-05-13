
function Duration({flight}: any) {
  return (
    <div>
      {flight?.itineraries[0]?.duration}<br/>
      <span>--------</span>
    </div>
  )
}

export default Duration
