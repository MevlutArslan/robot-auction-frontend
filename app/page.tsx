"use client";
import { Button } from "@/components/ui/button";
import { RobotTable, RobotCapability, RobotData, RobotProvider } from "./_components/robots_table";
import { Navbar } from "./_components/navbar";
import { useAuth, useClerk } from "@clerk/nextjs";
import { SignIn } from "@clerk/clerk-react";


const robots: RobotData[] = [
  { id: "1", name: "Robo1", rating: 5, provider: RobotProvider.TESLA, location: "New York", capabilities: [RobotCapability.CLEAN, RobotCapability.COOK], highestBid: 1000 },
  { id: "2", name: "Robo2", rating: 3, provider: RobotProvider.FIGURE, location: "Los Angeles", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2000 },
  { id: "3", name: "Robo3", rating: 4, provider: RobotProvider.NVIDIA, location: "San Francisco", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1500 },
  { id: "4", name: "Robo4", rating: 2, provider: RobotProvider.TESLA, location: "Chicago", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 3000 },
  { id: "5", name: "Robo5", rating: 3, provider: RobotProvider.FIGURE, location: "Houston", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2500 },
  { id: "6", name: "Robo6", rating: 1, provider: RobotProvider.NVIDIA, location: "Phoenix", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1200 },
  { id: "7", name: "Robo7", rating: 2, provider: RobotProvider.TESLA, location: "Philadelphia", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 3500 },
  { id: "8", name: "Robo8", rating: 5, provider: RobotProvider.FIGURE, location: "San Antonio", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2200 },
  { id: "9", name: "Robo9", rating: 5, provider: RobotProvider.NVIDIA, location: "San Diego", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1700 },
  { id: "10", name: "Robo10", rating: 4, provider: RobotProvider.TESLA, location: "Dallas", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 4000 },
  { id: "11", name: "Robo11", rating: 3, provider: RobotProvider.FIGURE, location: "San Jose", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2700 },
  { id: "12", name: "Robo12", rating: 4.5, provider: RobotProvider.NVIDIA, location: "Austin", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1300 },
  { id: "13", name: "Robo13", rating: 4, provider: RobotProvider.TESLA, location: "Jacksonville", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 4500 },
  { id: "14", name: "Robo14", rating: 2, provider: RobotProvider.FIGURE, location: "Fort Worth", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2800 },
  { id: "15", name: "Robo15", rating: 3, provider: RobotProvider.NVIDIA, location: "Columbus", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1400 },
  { id: "16", name: "Robo16", rating: 1, provider: RobotProvider.TESLA, location: "Charlotte", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 5000 },
  { id: "17", name: "Robo17", rating: 2, provider: RobotProvider.FIGURE, location: "San Francisco", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2900 },
  { id: "18", name: "Robo18", rating: 5, provider: RobotProvider.NVIDIA, location: "Indianapolis", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1600 },
  { id: "19", name: "Robo19", rating: 5, provider: RobotProvider.TESLA, location: "Seattle", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 5500 },
  { id: "20", name: "Robo20", rating: 5, provider: RobotProvider.FIGURE, location: "Denver", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 3000 },
  { id: "21", name: "Robo13", rating: 4, provider: RobotProvider.TESLA, location: "Jacksonville", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 4500 },
  { id: "22", name: "Robo14", rating: 4, provider: RobotProvider.FIGURE, location: "Fort Worth", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN, RobotCapability.REPAIR], highestBid: 2800 },
  { id: "23", name: "Robo15", rating: 4, provider: RobotProvider.NVIDIA, location: "Columbus", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1400 },
  { id: "24", name: "Robo16", rating: 2, provider: RobotProvider.TESLA, location: "Charlotte", capabilities: [RobotCapability.COOK, RobotCapability.CLEAN], highestBid: 5000 },
  { id: "25", name: "Robo17", rating: 3, provider: RobotProvider.FIGURE, location: "San Francisco", capabilities: [RobotCapability.CONVERSE, RobotCapability.ENTERTAIN], highestBid: 2900 },
  { id: "26", name: "Robo18", rating: 1, provider: RobotProvider.NVIDIA, location: "Indianapolis", capabilities: [RobotCapability.BUILD, RobotCapability.REPAIR], highestBid: 1600 }
];


export default function Home() {
    const {isSignedIn} = useAuth()
    return (
      <main className="flex flex-row min-h-[90vh] w-screen items-center justify-center px-2">
        {isSignedIn ? <RobotTable robots={robots} /> : <SignIn/> }
      </main>
    );
}
