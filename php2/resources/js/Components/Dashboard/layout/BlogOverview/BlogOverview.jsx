import React from "react";
import BlogOverviewList from "../../common/BlogOverviewList/BlogOverviewList";

export default function BlogOverview() {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card h-100">
                <div className="card-header pb-0">
                    <h6>Unapproved Blog</h6>
                </div>
                <div className="card-body p-3">
                    <div className="timeline timeline-one-side">
                        <BlogOverviewList
                            date={"24 JAN 7:20AM"}
                            title={"New Post Unapproved"}
                        />
                        <BlogOverviewList
                            date={"24 JAN 7:20AM"}
                            title={"New Post Unapproved"}
                        />
                        <BlogOverviewList
                            date={"24 JAN 7:20AM"}
                            title={"New Post Unapproved"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
