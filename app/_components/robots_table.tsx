"use client";

import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { SelectContent } from '@radix-ui/react-select';
import RobotAuctionRow from './robot_auction_row';

export enum RobotProvider {
    TESLA = "Tesla",
    FIGURE = "Figure",
    NVIDIA = "NVIDIA"
}

export enum RobotCapability {
    COOK = "Cook",
    CLEAN = "Clean",
    CONVERSE = "Converse",
    ENTERTAIN = "Entertain",
    BUILD = "Build",
    REPAIR = "Repair"
}

const CapabilityColorMap: Record<RobotCapability, string> = {
    [RobotCapability.COOK]: "bg-green-200 text-green-800",
    [RobotCapability.CLEAN]: "bg-blue-200 text-blue-800",
    [RobotCapability.CONVERSE]: "bg-yellow-200 text-yellow-800",
    [RobotCapability.ENTERTAIN]: "bg-purple-200 text-purple-800",
    [RobotCapability.BUILD]: "bg-red-200 text-red-800",
    [RobotCapability.REPAIR]: "bg-orange-200 text-orange-800",
};

export interface RobotData {
    id: string,
    name: string,
    provider: RobotProvider,
    location: string,
    capabilities: RobotCapability[],
    highestBid: number
}

export const getCapabilityTags = (capabilities: RobotCapability[]) => {
    console.log(capabilities)
    return capabilities.map((capability) => (
        <span key={capability} className={`px-2 py-1 rounded-md ${CapabilityColorMap[capability]}`}>
            {capability}
        </span>
    ));
};



export function RobotTable({ robots }: { robots: RobotData[] }) {
    const [bids, setBids] = useState<{ [key: string]: number }>({});
    const [searchTerm, setSearchTerm] = useState("");
    const [providerFilter, setProviderFilter] = useState<RobotProvider | "">("");
    const [capabilitiesFilter, setCapabilitiesFilter] = useState<RobotCapability[]>([]);
    const [filteredRobots, setFilteredRobots] = useState(robots);

    const handleBidChange = (id: string, bid: number) => {
        setBids({ ...bids, [id]: bid });
    };

    const handleBidSubmit = (id: string) => {
        // Logic for submitting bid
        console.log(`Bid submitted for robot ${id}: ${bids[id]}`);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleProviderChange = (value: string) => {
        setProviderFilter(value as RobotProvider | "");
    };

    const handleCapabilityChange = (capability: RobotCapability, checked: boolean) => {
        if (checked) {
            setCapabilitiesFilter([...capabilitiesFilter, capability]);
        } else {
            setCapabilitiesFilter(capabilitiesFilter.filter(c => c !== capability));
        }
    };

    useEffect(() => {
        setFilteredRobots(robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchTerm.toLowerCase()) || robot.provider === providerFilter;
        }))
    }, [searchTerm])

    return (
        <div className="flex flex-col my-5 w-[80%]">
            {robots.map((robot, index) => (
                <RobotAuctionRow key={robot.id} robot={robot}/>
            ))}
        </div>
    );
}