import React from "react";
import NewestBlogList from "../../common/NewestBlogList/NewestBlogList";

export default function RecentBlog() {
    return (
        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
            <div className="card">
                <div className="card-header pb-0">
                    <div className="row">
                        <div className="col-lg-6 col-7">
                            <h6>Newest Blog</h6>
                            <p className="text-sm mb-0">
                                <i
                                    className="fa fa-check text-info"
                                    aria-hidden="true"
                                ></i>
                                <span className="font-weight-bold ms-1">
                                    30 done
                                </span>
                                this month
                            </p>
                        </div>
                        <div className="col-lg-6 col-5 my-auto text-end">
                            <div className="dropdown float-lg-end pe-4">
                                <a
                                    className="cursor-pointer"
                                    id="dropdownTable"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fa fa-ellipsis-v text-secondary"></i>
                                </a>
                                <ul
                                    className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                                    aria-labelledby="dropdownTable"
                                >
                                    <li>
                                        <a
                                            className="dropdown-item border-radius-md"
                                            href="javascript:;"
                                        >
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item border-radius-md"
                                            href="javascript:;"
                                        >
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item border-radius-md"
                                            href="javascript:;"
                                        >
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body px-0 pb-2">
                    <div className="table-responsive">
                        <table className="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Blog
                                    </th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        Author
                                    </th>
                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Like
                                    </th>
                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Comment
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <NewestBlogList
                                    authorAvatar={
                                        "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg"
                                    }
                                    comment={120}
                                    like={8}
                                    thumbnail={
                                        "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-xd.svg"
                                    }
                                    title={"Soft UI XD Version"}
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
