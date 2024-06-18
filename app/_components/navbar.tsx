"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, UserButton, UserProfile, useAuth, useUser } from "@clerk/nextjs";
import React from 'react';
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DotIcon } from "@radix-ui/react-icons";
import { PaymentsPage } from "./payment_page";

const PaymentIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15" height="15" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /></svg>
}

const CustomUserButton = () => {
    const { user } = useUser();
    const { isSignedIn } = useAuth();
    const router = useRouter();

    const handleViewAccount = () => router.push('/account');

    if (!isSignedIn) return null;

    return (
        <UserButton afterSignOutUrl='/'>
            <UserButton.UserProfilePage label="account" />
            <UserButton.UserProfilePage label="security" />
            <UserButton.UserProfilePage
                label="Payments"
                url="payment"
                labelIcon={<PaymentIcon />}
            >
                <PaymentsPage userCredits={{credits: 10.0}}/>
            </UserButton.UserProfilePage>
        </UserButton>
    );
};


export const Navbar = () => {
    const { isSignedIn, } = useAuth();
    return (
        <nav className="w-full flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-2xl font-bold">Robot Service Auction</div>
            <div className="flex items-center space-x-4">
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">About</Button>
                <Button variant="ghost">Contact</Button>
                {isSignedIn && (
                    <div className="flex items-center">
                        <CustomUserButton />
                        {/* <UserButton appearance={{ elements: { userButtonAvatarBox: "h-8 w-8" } }} /> */}
                    </div>
                )}
            </div>
        </nav>
    );
};
