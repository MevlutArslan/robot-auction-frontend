import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface UserCreditInfo {
    credits: number;
}

export const PaymentsPage = ({ userCredits }: { userCredits: UserCreditInfo }) => {
    const [credits, setCredits] = useState(userCredits.credits); // initial credits

    const addCredits = () => {
        setCredits(credits + 10); // add 10 credits
    };

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold tracking-tight mb-4">
                Payments & Credits
            </h3>
            <div className="bg-background p-4 rounded-lg shadow-md space-y-4">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-400 text-sm block">Credits</span>
                        <span className="text-2xl text-primary font-bold">{`${credits}$`}</span>
                    </div>
                    <Button onClick={addCredits} className="self-start mt-2">
                        Add Credits
                    </Button>
                </div>
            </div>
            <Table>
            <h3 className="text-xl font-semibold tracking-tight">Auction History</h3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Field 1</TableHead>
                            <TableHead>Field 2</TableHead>
                            <TableHead>Field 3</TableHead>
                            <TableHead>Field 4</TableHead>
                            <TableHead>Field 5</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        
                    </TableBody>
                </Table>
            </Table>
        </div>
    );
};
