"use client"

import { SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react"
import Link from "next/link"
import { useAuth, useClerk } from "@clerk/nextjs"

const items = [
    {
        title: "History",
        url: "/playlist/history",
        icon: HistoryIcon,
        auth: true,
    },
    {
        title: "Like Video",
        url: "/playlist/Liked",
        icon: ThumbsUpIcon,
        auth: true,
    },
    {
        title: "All Playlist",
        url: "/playlists",
        icon: ListVideoIcon,
        auth: true,
    }
]

export const PersionalSection = () => {
    const clerk = useClerk();
    const { isSignedIn } = useAuth();
    return (
        <SidebarGroupContent>
            <SidebarGroupLabel>
                You
            </SidebarGroupLabel>
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