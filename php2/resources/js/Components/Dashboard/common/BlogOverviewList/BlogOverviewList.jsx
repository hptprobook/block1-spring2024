import React from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";

export default function BlogOverviewList({ title, date }) {
    return (
        <div className="timeline-block mb-3">
            <span className="timeline-step">
                <PostAddIcon />
            </span>
            <div className="timeline-content">
                <h6 className="text-dark text-sm font-weight-bold mb-0">
                    {title}
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    {date}
                </p>
            </div>
        </div>
    );
}
