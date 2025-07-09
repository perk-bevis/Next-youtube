//module/home/ui/layouts:  Một cấu trúc chung của trang, khu vực {children} để chứa nội dung trang con
import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavbar } from "../components/home-navbar";
import { HomeSizeBar } from "../components/home-sidebar";

// hook api sever until
interface LayoutProps {
   children: React.ReactNode;
}

export default function HomeLayout({children}: LayoutProps){
    return (
        <SidebarProvider>
            <div className="w-full">
                <HomeNavbar />
                <div className="flex min-h-screen pt-[4rem]">
                    <HomeSizeBar/>
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}