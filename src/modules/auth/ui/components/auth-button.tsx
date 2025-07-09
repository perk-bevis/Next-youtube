"use client"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { UserCircleIcon } from "lucide-react"

export const AuthButton = () => {
    // todo: add different auth states
    return (
        <>
            <SignedIn>
                <UserButton/>
                {/* add menu items for studio and user profile */}
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button variant={"outline"} className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none ">
                        <UserCircleIcon />
                        sign in
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    )
}