import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function SidebarButton({ icon, text, isActive = false, href }) {
    return (
        <li className="nav-item">
            <Link
                className={`nav-link ${isActive ? "active" : ""}`}
                href={href}
            >
                <div
                    className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
                    style={{
                        color: "#3a416f",
                    }}
                >
                    {icon}
                </div>
                <span className="nav-link-text ms-1">{text}</span>
            </Link>
        </li>
    );
}
