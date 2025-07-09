import {Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { MainSection } from "./main-section"
import { Separator } from "@/components/ui/separator"
import { PersionalSection } from "./persional-section"

export const HomeSizeBar = () =>{
    return (
        // collapsible=icon là: Một tính năng trên trang web nơi bạn nhấp vào một biểu tượng để hiện hoặc ẩn một khối nội dung nào đó.
        <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
            <SidebarContent className="bg-background">
                <MainSection/>
                <Separator/>
                <PersionalSection/>
            </SidebarContent>
        </Sidebar>
    )
}