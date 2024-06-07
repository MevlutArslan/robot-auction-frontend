"use client";

import React from 'react';
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

export function RobotTable({robots}: {robots: RobotData[]}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Robot Name</TableHead>
                    <TableHead>Robot Provider</TableHead>
                    <TableHead>Robot Location</TableHead>
                    <TableHead>Robot Capabilities</TableHead>
                    <TableHead>Highest Bid</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {robots.map((robot: RobotData, index: number) => (
                    <TableRow key={robot.id}>
                        <TableCell className="font-medium">{robot.name}</TableCell>
                        <TableCell>{robot.provider}</TableCell>
                        <TableCell>{robot.location}</TableCell>
                        <TableCell>{getCapabilityTags(robot.capabilities)}</TableCell>
                        <TableCell>{robot.highestBid}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
