
function Flight({segment}:any) {

  return (
    <div>
      <p>
        <span>{segment.carrierCode}</span> <span>{segment.aircraft}</span>
      </p>
    </div>
  )
}

export default Flight
