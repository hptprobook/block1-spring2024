import React from "react";
import ReportCard from "../../common/ReportCard/ReportCard";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import ActiveUser from "../ActiveUser/ActiveUser";
import RecentBlog from "../RecentBlog/RecentBlog";
import SaleOverview from "../SaleOverview/SaleOverview";
import BlogOverview from "../BlogOverview/BlogOverview";

export default function DashboardContainer() {
    return (
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
            <div className="container-fluid py-4">
                <div className="row">
                    <ReportCard
                        name={"Total Post"}
                        quantity={"8000"}
                        percent={20}
                        icon={<PostAddIcon />}
                    />
                    <ReportCard
                        name={"Total Comment"}
                        quantity={"8000"}
                        percent={50}
                        icon={<AddCommentIcon />}
                    />
                    <ReportCard
                        name={"Approved"}
                        quantity={"8000"}
                        percent={50}
                        icon={<ChecklistRtlIcon />}
                    />
                    <ReportCard
                        name={"Cancelled"}
                        quantity={"500"}
                        percent={10}
                        icon={<CancelScheduleSendIcon />}
                    />
                </div>
                <div className="row mt-4">
                    <ActiveUser />
                    <SaleOverview />
                </div>
                <div className="row my-4">
                    <RecentBlog />
                    <BlogOverview />
                </div>
            </div>
        </main>
    );
}
