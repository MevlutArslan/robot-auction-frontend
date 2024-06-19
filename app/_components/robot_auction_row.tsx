import React, { ReactElement, useState } from 'react'
import { getCapabilityTags, RobotCapability, RobotData } from './robots_table'


const getStars = (rating: number) => {
    return (
        <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
                <svg key={index} className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.3 4.01a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.42 2.49a1 1 0 00-.36 1.118l1.3 4.01c.3.92-.755 1.688-1.54 1.118l-3.42-2.49a1 1 0 00-1.176 0l-3.42 2.49c-.784.57-1.84-.198-1.54-1.118l1.3-4.01a1 1 0 00-.36-1.118l-3.42-2.49c-.784-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.3-4.01z" />
                </svg>
            ))}
        </div>
    );
};

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
                    <span className="text-yellow-500">{getStars(robot.rating)}</span>
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