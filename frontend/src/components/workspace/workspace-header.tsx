"use client";

import { MessageSquarePlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useI18n } from "@/core/i18n/hooks";
import { env } from "@/env";
import { cn } from "@/lib/utils";

export function WorkspaceHeader({ className }: { className?: string }) {
  const { t } = useI18n();
  const { state } = useSidebar();
  const pathname = usePathname();
  return (
    <>
      <div
        className={cn(
          "group/workspace-header flex h-14 flex-col justify-center px-2",
          className,
        )}
      >
        {state === "collapsed" ? (
          <div className="group-has-data-[collapsible=icon]/sidebar-wrapper:-translate-y flex w-full cursor-pointer items-center justify-center">
            <div className="workspace-wordmark text-sidebar-foreground/86 block text-[0.62rem] group-hover/workspace-header:hidden">
              DF
            </div>
            <SidebarTrigger className="workspace-surface-button hidden rounded-full pl-2 group-hover/workspace-header:block" />
          </div>
        ) : (
          <div className="workspace-surface-button flex items-center justify-between gap-2 rounded-[1.25rem] px-3 py-2">
            {env.NEXT_PUBLIC_STATIC_WEBSITE_ONLY === "true" ? (
              <Link href="/" className="ml-1">
                <div className="workspace-wordmark text-sidebar-foreground/88 text-[0.65rem]">
                  Deer<span>Flow</span>
                </div>
              </Link>
            ) : (
              <div className="ml-1 cursor-default">
                <div className="workspace-wordmark text-sidebar-foreground/88 text-[0.65rem]">
                  Deer<span>Flow</span>
                </div>
              </div>
            )}
            <SidebarTrigger className="workspace-surface-button rounded-full" />
          </div>
        )}
      </div>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            isActive={pathname === "/workspace/chats/new"}
            asChild
            className="workspace-cta rounded-[1.15rem]"
          >
            <Link
              className="font-medium text-white"
              href="/workspace/chats/new"
            >
              <MessageSquarePlus size={16} />
              <span>{t.sidebar.newChat}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
