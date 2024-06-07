import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, UserButton, useAuth, useUser } from "@clerk/nextjs";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const CustomUserButton = () => {
    const { user } = useUser();
    const { isSignedIn } = useAuth();
    const router = useRouter();

    const handleViewAccount = () => router.push('/account');

    if (!isSignedIn) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <img src={user?.imageUrl} height={20} width={20} alt="user_image" className="rounded-full" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleViewAccount}  className="cursor-pointer">
                    View Account
                </DropdownMenuItem>
                <SignOutButton>
                    <DropdownMenuItem className="cursor-pointer">
                        Sign Out
                    </DropdownMenuItem>
                </SignOutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};


export const Navbar = () => {
    const { isSignedIn,  } = useAuth();
    return (
        <nav className="w-full flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-2xl font-bold">My Robot Auction</div>
            <div className="flex items-center space-x-4">
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">About</Button>
                <Button variant="ghost">Contact</Button>
                {isSignedIn && (
                    <div className="flex items-center">
                        <CustomUserButton/>
                        {/* <UserButton appearance={{ elements: { userButtonAvatarBox: "h-8 w-8" } }} /> */}
                    </div>
                )}
            </div>
        </nav>
    );
};
