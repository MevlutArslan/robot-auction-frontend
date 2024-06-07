import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, UserButton, useAuth } from "@clerk/nextjs";

export const Navbar = () => {
    const { isSignedIn } = useAuth();
    return (
        <nav className="w-full flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-2xl font-bold">My Robot Auction</div>
            <div className="flex items-center space-x-4">
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">About</Button>
                <Button variant="ghost">Contact</Button>
                {isSignedIn && (
                    <div className="flex items-center">
                        <UserButton appearance={{ elements: { userButtonAvatarBox: "h-8 w-8" } }} />
                    </div>
                )}
            </div>
        </nav>
    );
};
