
function Form() {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Selected option:',e );
  };
  return (
    <div className="mx-16 mt-6">
      <div className="divider divider-primary"></div>
      <form onSubmit={handleSubmit}>
        <div className="lg:flex items-center">
          <input placeholder="LHR" className="pl-2 py-2 rounded border-2 border-indigo-500" type="text" />
          <input placeholder="CDG" className="lg:mx-2 pl-2 py-2 my-4 lg:my-0  rounded border-2 border-indigo-500" type="text" />
          <input className="mx-2 pl-2 py-2 rounded border-2 border-indigo-500" type="date" id="birthday" name="birthday" />
          <select className="mx-2 my-4 lg:my-0 select select-primary w-24 max-w-xs">
            <option>day -</option>
          </select>
          <select className="mx-2 select select-primary w-24 max-w-xs">
            <option>day +</option>
          </select>
          <select className="my-4 lg:my-0 mx-2 select select-primary w-36 max-w-xs">
            <option>Any Time</option>
          </select>
          <button className="text-xl font-bold ml-6">+</button>
          <select className="mx-2 select select-primary w-24 max-w-xs">
            <option>ADT</option>
          </select>
          <select className="mt-4 lg:mt-0 mx-2 select select-primary w-24 max-w-xs">
            <option>1</option>
          </select>
          <button className="text-xl font-bold ml-6">+</button>
        </div>
        <div className="divider mt-3 divider-primary"></div>
        <div className="lg:flex justify-between items-center">
          <div className="flex items-center">
            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
            <label className="lg:text-xl lg:font-bold ml-2" htmlFor="Extra Option">Extra Option</label>
          </div>
          <div className="lg:flex lg:text-xl lg:font-bold items-center">
            <label htmlFor="">Enverionment</label>
            <input type="radio" name="radio-2" className="mx-2 radio radio-primary" />
            <label className="ml-2 " htmlFor="">Dummy</label>
            <input type="radio" name="radio-2" className="mx-2 radio radio-primary" />
            <label className="ml-2 " htmlFor="">PDT</label>
          </div>
          <button className="btn btn-primary uppercase">Search</button>
        </div>
      </form>
      <div className="divider mt-3 divider-primary"></div>
    </div>
  )
}

export default Form
