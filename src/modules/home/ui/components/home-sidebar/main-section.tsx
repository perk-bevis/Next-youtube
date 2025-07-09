"use client"

import { SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react"
import Link from "next/link"
import { useAuth, useClerk } from "@clerk/nextjs"

const items = [
    {
        title: "home",
        url: "/",
        icon: HomeIcon,
    },
    {
        title: "Subscriptions",
        url: "/feed/subscriptions",
        icon: PlaySquareIcon,
        auth: true,
    },
    {
        title: "Trending",
        url: "/feed/trending",
        icon: FlameIcon,
    }
]

export const MainSection = () => {
    const clerk = useClerk();
    const { isSignedIn } = useAuth();
    return (
        <SidebarGroupContent>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            tooltip={item.title}
                            asChild
                            isActive={false} //TODO: change to look at current pathname
                            onClick={(e) => {
                                if(!isSignedIn && item.auth){
                                    e.preventDefault()
                                    return clerk.openSignIn()
                                }
                            }} // TODO: do domething onclick
                        >
                            <Link href={item.url} className="flex items-center gap-4">
                                <item.icon />
                                <span>
                                    {item.title}
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
    )
}