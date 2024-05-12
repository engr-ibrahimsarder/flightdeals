import { useEffect, useState } from "react"

function FlightsData() {
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        const url = 'flightData.json';
        fetch(url).then(res => res.json())
            .then(data => {
                setFlights(data.flightOffer)
            })
    }, []);
    return (
        <div className="">
            {
                flights && <h1 className="mx-16 lg:font-bold lg:text-xl mt-0 mb-8">Data Parse Successfully</h1>
            }
            <div className="overflow-x-auto mx-16">
                <table className="table table-xs">
                    <thead className="bg-gray-100 ">
                        <tr>
                            <th></th>
                            <th>FLIGHT</th>
                            <th>AIRCRAFT</th>
                            <th>CLASS</th>
                            <th>FARE</th>
                            <th>ROUTE</th>
                            <th>DEPARTURE</th>
                            <th>ARRIVAL</th>
                            <th>DURATION</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map(flight =>
                            <tr className="border-red-400">
                                <th className="py-8"></th>
                                <td>
                                    {flight.itineraries[0]?.segments?.map(air =>
                                        <>
                                            <p>
                                                <span>{air.carrierCode}</span>
                                                <span>{air.aircraft}</span>
                                            </p>
                                        </>
                                    )}
                                </td>
                                <td>
                                    {flight.itineraries[0]?.segments?.map(air =>
                                        <>
                                            <p>{air.flightNumber}</p>
                                        </>
                                    )}
                                </td>
                                <td>
                                    {flight.class.map(cla =>
                                        <>
                                            <p>{cla[0]}<br />{cla[1]}</p>
                                        </>
                                    )}
                                </td>
                                <td>
                                    {flight?.fareBasis?.map(far =>
                                        <>
                                            <p>{far[0]}<br />{far[1]}</p>
                                        </>
                                    )}
                                </td>
                                <td>
                                    {flight.itineraries[0]?.segments?.map(air =>
                                        <>
                                            <p>{air?.departure?.iataCode} - {air?.arrival?.iataCode}</p>
                                        </>
                                    )}
                                </td>
                                <td>
                                    {flight.itineraries[0]?.segments?.map(air =>
                                        <>
                                            <p>{air?.departure?.at}</p>
                                        </>
                                    )}
                                </td>
                                <td>
                                    {flight.itineraries[0]?.segments?.map(air =>
                                        <>
                                            <p>{air?.arrival?.at}</p>

                                        </>
                                    )}
                                </td>
                                <td>
                                    {flight?.itineraries[0]?.duration}
                                </td>
                                <td>{flight.price}<br /><button className="btn bg-primary  hover:bg-primary text-white ">select</button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FlightsData
