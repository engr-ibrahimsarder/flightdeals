import { useEffect, useState } from "react"
import Flight from "../../../components/Flight";
import AirCraft from "../../../components/AirCraft";
import Class from "../../../components/Class";
import Fare from "../../../components/Fare";
import Route from "../../../components/Route";
import Departure from "../../../components/Departure";
import Arrival from "../../../components/Arrival";
import Duration from "../../../components/Duration";
import Price from "../../../components/Price";

function FlightsData({ data }: any) {
    const formData = data;

    const [flights, setFlights] = useState([]);
    useEffect(() => {
        const url = 'flightData.json';
        fetch(url).then(res => res.json())
            .then(data => {
                setFlights(data.flightOffer)
            })
    }, []);

    return (
        <div>
            {formData &&
                <div>
                    {
                        flights && <h1 className="mx-16 lg:font-bold lg:text-xl mt-0 mb-8">Data Parse Successfully</h1>
                    }
                    <div className="overflow-x-auto mx-16 ">
                        <table className="table table-xs sm:overflow-x-auto lg:overflow-x-hidden">
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
                                {flights.map((flight: any) =>
                                    <tr className="border-red-400">
                                        <th className="py-8"></th>
                                        {/* segments array map then single element data process ui */}
                                        <td>
                                            {flight.itineraries[0]?.segments?.map((segment: any) =>
                                            <Flight
                                            segment={segment}
                                            ></Flight> 
                                            )}
                                        </td>
                                        {/* segments array data map then single data process ui  */}
                                        <td>
                                            {flight.itineraries[0]?.segments?.map((segment: any) =>
                                            <AirCraft
                                            segment={segment}
                                            ></AirCraft>
                                            )}
                                        </td>
                                        {/* class array map then single element data process ui */}
                                        <td>
                                            {flight.class.map((clas: any) =>
                                            <Class
                                            clas={clas}
                                            ></Class>
                                            )}
                                        </td>
                                        {/* fareBasis array map then single element data process ui */}
                                        <td>
                                            {flight?.fareBasis?.map((fare: any) =>
                                            <Fare
                                            fare={fare}
                                            ></Fare> 
                                            )}
                                        </td>
                                        {/* segments array map then single element data process ui */}
                                        <td>
                                            {flight.itineraries[0]?.segments?.map((segment: any) =>
                                            <Route
                                            segment={segment}
                                            ></Route>
                                            )}
                                        </td>
                                        {/* segments array map then single element data process ui */}
                                        <td>
                                            {flight.itineraries[0]?.segments?.map((segment: any) =>
                                            <Departure
                                            segment={segment}
                                            ></Departure>
                                            )}
                                        </td>
                                        {/* segments array map then single element data process ui */}
                                        <td>
                                            {flight.itineraries[0]?.segments?.map((segment: any) =>
                                            <Arrival
                                            segment={segment}
                                            ></Arrival>
                                            )}
                                        </td>
                                        <td>
                                            <Duration
                                            flight={flight}
                                            ></Duration>
                                        </td>
                                        <td>
                                            <Price
                                            flight={flight}
                                            ></Price>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}

export default FlightsData
