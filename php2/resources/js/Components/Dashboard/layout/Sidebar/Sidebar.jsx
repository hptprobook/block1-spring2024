import { Link, router, usePage } from "@inertiajs/react";
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
    const { url } = usePage();

    const isActive = (path) => {
        const regex = new RegExp(`^${path}$`, "i");
        return regex.test(url);
    };

    return (
        <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
            id="sidenav-main"
        >
            <div className="sidenav-header">
                <i
                    className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                    aria-hidden="true"
                    id="iconSidenav"
                ></i>
                <Link className="navbar-brand m-0" href="#">
                    <img
                        src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logo-ct-dark.png"
                        className="navbar-brand-img h-100"
                        alt="main_logo"
                    />
                    <span className="ms-1 font-weight-bold">
                        HPT Blog Dashboard
                    </span>
                </Link>
            </div>
            <hr className="horizontal dark mt-0" />
            <div
                className="collapse navbar-collapse w-auto"
                id="sidenav-collapse-main"
            >
                <ul className="navbar-nav">
                    <SidebarButton
                        text={"Dashboard"}
                        isActive={isActive("/dashboard")}
                        icon={
                            <DashboardIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        }
                        href={route("dashboard.index")}
                    />
                    <SidebarButton
                        text={"New Blog"}
                        icon={
                            <AddBoxIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        }
                        isActive={isActive("/dashboard/create")}
                        href="/dashboard/create"
                    />
                    <SidebarButton
                        text={"Blog List"}
                        isActive={isActive("/dashboard/list")}
                        icon={
                            <FormatListBulletedIcon
                                sx={{
                                    fontSize: "14px",
                                }}
                            />
                        }
                        href="/dashboard/list"
                    />
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
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
