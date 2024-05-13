

function Price({flight}: any) {
  return (
    <div>
      {flight.price}<br />
      <button className="btn bg-primary  hover:bg-primary text-white ">select</button>
    </div>
  )
}

export default Price
