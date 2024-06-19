import React, { ReactElement, useState } from 'react'
import { getCapabilityTags, RobotCapability, RobotData } from './robots_table'

/*
export interface RobotData {
    id: string,
    name: string,
    provider: RobotProvider,
    location: string,
    capabilities: RobotCapability[],
    highestBid: number
}
*/

export default function RobotAuctionRow({ robot }: { robot: RobotData }) {
    const [bidAmount, setBidAmount] = useState('');

    const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBidAmount(e.target.value);
    };

    const handleBidSubmit = () => {
        // Handle bid submission logic here
        console.log(`Bid submitted: ${bidAmount}`);
    };

    return (
        <div className="flex flex-row bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 transition duration-300 mb-4">
            <div className="flex-shrink-0">
                <img
                    src={`https://picsum.photos/200?random=${robot.id}`}
                    alt={robot.name}
                    className="w-48 h-full object-cover rounded-lg"
                />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
                <div>
                    <h2 className="text-lg font-semibold">{robot.name}</h2>
                    <p className="text-gray-600"><strong>Provider:</strong> {robot.provider}</p>
                    <p className="text-gray-600"><strong>Location:</strong> {robot.location}</p>
                    <div className="flex flex-wrap items-center gap-2">
                        <p className="text-gray-600"><strong>Capabilities:</strong></p>
                        {getCapabilityTags(robot.capabilities)}
                    </div>
                    <p className="text-gray-600"><strong>Current Highest Bid:</strong> ${robot.highestBid}</p>
                    <div className='flex flex-row w-48'>
                        <input
                            type="number"
                            value={bidAmount}
                            onChange={handleBidChange}
                            placeholder={robot.highestBid.toString()}
                            min={robot.highestBid}
                            className="border border-gray-300 rounded-lg px-2 py-1 mr-1"
                        />
                        <button
                            onClick={handleBidSubmit}
                            className="bg-blue-500 text-white text-sm font-semibold py-1 px-4 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Place Bid
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}  