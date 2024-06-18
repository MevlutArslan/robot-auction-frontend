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

const getCapabilityTags = (capabilities: RobotCapability[]) => {
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
        <div className="flex flex-col w-[80%]">
            <div className="flex flex-col py-4">
                <div className='flex flex-row'>
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full"
                    />

                    <Select value={providerFilter} onValueChange={handleProviderChange}>
                        <SelectTrigger className="w-64">
                            <SelectValue placeholder="Any Provider"/>
                        </SelectTrigger>
                        <SelectContent>
                            Choose Provider
                            {Object.values(RobotProvider).map(provider => (
                                <SelectItem key={provider} value={provider}>{provider}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className='flex flex-row'>
                    {Object.values(RobotCapability).map(capability => (
                        <div key={capability} className="flex items-center px-2 space-x-2">
                            <Checkbox
                                checked={capabilitiesFilter.includes(capability)}
                                onCheckedChange={(checked) => handleCapabilityChange(capability, checked)}
                            />
                            <span>{capability}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Robot Name</TableHead>
                        <TableHead>Robot Provider</TableHead>
                        <TableHead>Robot Location</TableHead>
                        <TableHead>Robot Capabilities</TableHead>
                        <TableHead>Highest Bid</TableHead>
                        <TableHead>Place Bid</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredRobots.map((robot: RobotData) => (
                        <TableRow key={robot.id}>
                            <TableCell className="font-medium">{robot.name}</TableCell>
                            <TableCell>{robot.provider}</TableCell>
                            <TableCell>{robot.location}</TableCell>
                            <TableCell>{getCapabilityTags(robot.capabilities)}</TableCell>
                            <TableCell>{robot.highestBid}</TableCell>
                            <TableCell className="flex space-x-2 items-center">
                                <Input
                                    type="number"
                                    placeholder="Enter bid"
                                    value={bids[robot.id] || ''}
                                    onChange={(e) => handleBidChange(robot.id, parseFloat(e.target.value))}
                                    className="w-24"
                                />
                                <Button onClick={() => handleBidSubmit(robot.id)} className="whitespace-nowrap">
                                    Submit Bid
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}