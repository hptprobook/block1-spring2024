import { Link, router } from "@inertiajs/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import React, { useState } from "react";
import SidebarButton from "../../common/SidebarButton/SidebarButton";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CategoryIcon from "@mui/icons-material/Category";
import TagIcon from "@mui/icons-material/Tag";
import CommentIcon from "@mui/icons-material/Comment";
import LayersIcon from "@mui/icons-material/Layers";

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState("Dashboard");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <aside
            class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
            id="sidenav-main"
        >
            <div class="sidenav-header">
                <i
                    class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                    aria-hidden="true"
                    id="iconSidenav"
                ></i>
                <Link class="navbar-brand m-0" href="#">
                    <img
                        src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logo-ct-dark.png"
                        class="navbar-brand-img h-100"
                        alt="main_logo"
                    />
                    <span class="ms-1 font-weight-bold">
                        HPT Blog Dashboard
                    </span>
                </Link>
            </div>
            <hr class="horizontal dark mt-0" />
            <div
                class="collapse navbar-collapse w-auto"
                id="sidenav-collapse-main"
            >
                <ul class="navbar-nav">
                    <SidebarButton
                        onClick={() => handleTabClick("Dashboard")}
                        href={route("dashboard.index")}
                        text={"Dashboard"}
                        icon={
                            <DashboardIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        }
                        isActive={activeTab === "Dashboard"}
                    />
                    <SidebarButton
                        text={"New Blog"}
                        href={route("dashboard.blog.create")}
                        onClick={() => handleTabClick("New Blog")}
                        icon={
                            <AddBoxIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        }
                        isActive={activeTab === "New Blog"}
                    />
                    <SidebarButton
                        text={"Blog List"}
                        icon={
                            <FormatListBulletedIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        }
                    />
                    <li class="nav-item mt-3">
                        <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                            Blog
                        </h6>
                    </li>
                    <SidebarButton
                        text={"Categories"}
                        icon={
                            <CategoryIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        }
                    />
                    <SidebarButton
                        text={"Tags"}
                        icon={
                            <TagIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        }
                    />
                    <SidebarButton
                        text={"Comments"}
                        icon={
                            <CommentIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        }
                    />
                    <SidebarButton
                        text={"Page"}
                        icon={
                            <LayersIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        }
                    />
                </ul>
            </div>
        </aside>
    );
}
