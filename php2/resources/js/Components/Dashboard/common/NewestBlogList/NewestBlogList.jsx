import React from "react";

export default function NewestBlogList({
    thumbnail,
    title,
    authorAvatar,
    like,
    comment,
}) {
    return (
        <tr>
            <td>
                <div className="d-flex px-2 py-1">
                    <div>
                        <img
                            src={thumbnail}
                            className="avatar avatar-sm me-3"
                            alt="xd"
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-sm">{title}</h6>
                    </div>
                </div>
            </td>
            <td>
                <div className="avatar-group mt-2">
                    <a
                        href="javascript:;"
                        className="avatar avatar-xs rounded-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Ryan Tompson"
                    >
                        <img src={authorAvatar} alt="team1" />
                    </a>
                </div>
            </td>
            <td className="align-middle text-center text-sm">
                <span className="text-xs font-weight-bold">{like}</span>
            </td>
            <td className="align-middle text-center">
                <span className="text-xs font-weight-bold">{comment}</span>
            </td>
        </tr>
    );
}
