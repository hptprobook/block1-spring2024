import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function SidebarButton({
    icon,
    text,
    isActive = false,
    href = "#",
    onClick,
}) {
    const { url } = usePage();
    console.log("🚀 ~ file: SidebarButton.jsx:12 ~ url:", href);
    return (
        <li class="nav-item">
            <Link
                className={`nav-link ${isActive ? "active" : ""}`}
                // href={route(href)}
                href={href}
                onClick={onClick}
            >
                <div
                    class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
                    style={{
                        color: "#3a416f",
                    }}
                >
                    {icon}
                </div>
                <span class="nav-link-text ms-1">{text}</span>
            </Link>
        </li>
    );
}
