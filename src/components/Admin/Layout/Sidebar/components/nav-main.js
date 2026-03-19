"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavMain({ items }) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.name}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem className={`  xl:py-1`}>
              <CollapsibleTrigger
                asChild
                className={`${
                  pathname.startsWith(item?.url)
                    ? "bg-[#FDF8FF]"
                    : "hover:bg-[#FDF8FF]"
                }`}
              >
                <SidebarMenuButton tooltip={item.name}>
                  <div className="w-[20px]">
                    <Image
                      height={20}
                      width={20}
                      src={item?.icon}
                      className="w-auto h-auto"
                    />
                  </div>
                  <span className="group-data-[collapsible=icon]:hidden">
                    {item.name}
                  </span>
                  <ChevronRight className="group-data-[collapsible=icon]:hidden ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => {
                    const isActive = pathname.startsWith(subItem.url);
                    return (
                      <SidebarMenuSubItem
                        key={subItem.name}
                        className={`${
                          isActive ? "bg-[#FDF8FF]" : "hover:bg-[#FDF8FF]"
                        }`}
                      >
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url}>
                            <span>{subItem.name}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
