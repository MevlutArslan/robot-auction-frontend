"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { UserButton, UserProfile, useClerk, useUser } from "@clerk/nextjs";
import ProfileForm from './profile_page'; // Adjust the path as needed
import { Button } from '@/components/ui/button';
import { DotIcon } from '@radix-ui/react-icons';
import { MdOutlinePayment } from 'react-icons/md'
const CustomPage = () => {
    return (
        <div>
            <h1>Custom Profile Page</h1>
            <p>This is the custom profile page</p>
        </div>
    );
};

const PaymentIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15" height="15" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /></svg>
}

const AccountPage = () => {
    const { openUserProfile } = useClerk()
    const { user } = useUser();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <UserButton afterSignOutUrl='/'>
                <UserButton.UserProfilePage
                    label="Custom Page"
                    url="custom"
                    labelIcon={<DotIcon />}
                >
                    <CustomPage />
                </UserButton.UserProfilePage>
                <UserButton.UserProfilePage
                    label="Custom Page 2"
                    url="custom_s"
                    labelIcon={<PaymentIcon />}
                >
                    <CustomPage />
                    <span>Test</span>
                </UserButton.UserProfilePage>
                <UserButton.UserProfilePage label="account" />
                <UserButton.UserProfilePage label="security" />
            </UserButton>
        </div>
    );
};

export default AccountPage;
