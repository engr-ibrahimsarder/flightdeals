
function Header() {
  return (
    <div>
      <h1 className="font-bold text-xl ml-16">Master Price</h1>
      <div className="divider mt-0"></div>
      <div className="flex justify-center items-center">
        <button className="btn btn-xs rounded-none">Round Trip</button>
        <button className="btn btn-xs rounded-none btn-primary hover:btn-primary text-white">One Way</button>
        <button className="btn btn-xs rounded-none">Multi Trip</button>
      </div>
    </div>
  )
}

export default Header
