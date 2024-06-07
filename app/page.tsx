"use client";
import { RobotTable, RobotCapability, RobotData, RobotProvider } from "./_components/robots_table";


const robots: RobotData[] = [
  { id: "1", name: "Robo1", provider: RobotProvider.TESLA, location: "New York", capabilities: [RobotCapability.CLEAN, RobotCapability.COOK], highestBid: 1000 },
  { id: "2", name: "Robo2", provider: RobotProvider.FIGURE, location: "Los Angeles", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2000 },
  { id: "3", name: "Robo3", provider: RobotProvider.NVIDIA, location: "San Francisco", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1500 },
  { id: "4", name: "Robo4", provider: RobotProvider.TESLA, location: "Chicago", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 3000 },
  { id: "5", name: "Robo5", provider: RobotProvider.FIGURE, location: "Houston", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2500 },
  { id: "6", name: "Robo6", provider: RobotProvider.NVIDIA, location: "Phoenix", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1200 },
  { id: "7", name: "Robo7", provider: RobotProvider.TESLA, location: "Philadelphia", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 3500 },
  { id: "8", name: "Robo8", provider: RobotProvider.FIGURE, location: "San Antonio", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2200 },
  { id: "9", name: "Robo9", provider: RobotProvider.NVIDIA, location: "San Diego", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1700 },
  { id: "10", name: "Robo10", provider: RobotProvider.TESLA, location: "Dallas", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 4000 },
  { id: "11", name: "Robo11", provider: RobotProvider.FIGURE, location: "San Jose", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2700 },
  { id: "12", name: "Robo12", provider: RobotProvider.NVIDIA, location: "Austin", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1300 },
  { id: "13", name: "Robo13", provider: RobotProvider.TESLA, location: "Jacksonville", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 4500 },
  { id: "14", name: "Robo14", provider: RobotProvider.FIGURE, location: "Fort Worth", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2800 },
  { id: "15", name: "Robo15", provider: RobotProvider.NVIDIA, location: "Columbus", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1400 },
  { id: "16", name: "Robo16", provider: RobotProvider.TESLA, location: "Charlotte", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 5000 },
  { id: "17", name: "Robo17", provider: RobotProvider.FIGURE, location: "San Francisco", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2900 },
  { id: "18", name: "Robo18", provider: RobotProvider.NVIDIA, location: "Indianapolis", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1600 },
  { id: "19", name: "Robo19", provider: RobotProvider.TESLA, location: "Seattle", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 5500 },
  { id: "20", name: "Robo20", provider: RobotProvider.FIGURE, location: "Denver", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 3000 }
];


export default function Home() {
  return (
    <main className="flex flex-col items-start p-24">
      <RobotTable robots={robots} />
    </main>
  );
}
