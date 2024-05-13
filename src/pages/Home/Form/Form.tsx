import { useState } from "react";
import FlightsData from "../FlightsData/FlightsData";

function Form() {
  const [data, setData]: any = useState(null)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const data = {
      startP: target.startP.value,
      endP: target.endP.value,
      date: target.date.value,
      dayIncrease: target.dayIncrease.value,
      dayDecrease: target.dayDecrease.value,
      adt: target.adt.value,
      person: target.person.value
    }
    setData(data)
    setData(" ")
  };
  return (
    <div>
      <div className="mx-16 mt-6">
        <div className="divider divider-primary"></div>
        <form onSubmit={handleSubmit}>
          <div className="lg:flex items-center">
            <input type="text" name="startP" placeholder="LHR" className="pl-2 py-2 rounded border-2 border-primary" required />
            <input type="text" name="endP" placeholder="CDG" className="lg:mx-2 pl-2 py-2 my-4 lg:my-0  rounded border-2 border-primary" required />
            <input type="date" name="date" className="mx-2 pl-2 py-2 rounded border-2 border-primary" required />
            <select name="dayDecrease" className="mx-2 my-4 lg:my-0 select  border-primary  border-2 w-24 max-w-xs">
              <option>day -</option>
            </select>
            <select name="dayIncrease" className="mx-2 border-2 select select-primary w-24 max-w-xs">
              <option>day +</option>
            </select>
            <select name="time" className="my-4 border-2 lg:my-0 mx-2 select select-primary w-36 max-w-xs">
              <option>Any Time</option>
              <option>09: 00 AM</option>
              <option>10: 00 AM</option>
              <option>10: 30 AM</option>
              <option>11: 00 AM</option>
              <option>07: 00 PM</option>
              <option>07: 30 PM</option>
              <option>10: 30 PM</option>
              <option>11: 00 PM</option>
            </select>
            <button className="text-xl font-bold ml-6">+</button>
            <select name="adt" className="mx-2 border-2 select select-primary w-24 max-w-xs">
              <option>ADT</option>
            </select>
            <select name="person" className="mt-4 border-2 lg:mt-0 mx-2 select select-primary w-24 max-w-xs">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button className="text-xl font-bold ml-6">+</button>
          </div>
          <div className="divider mt-3 divider-primary"></div>
          <div className="lg:flex justify-between items-center">
            <div className="flex items-center">
              <label className="lg:text-xl lg:font-bold ml-2" htmlFor="Extra Option">Extra Option</label>
              <input type="checkbox" defaultChecked className="-order-1 checkbox checkbox-primary" />
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
      <FlightsData
        data={data}
      ></FlightsData>
    </div>
  )
}

export default Form
