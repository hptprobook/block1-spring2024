import { Box } from "@mui/material";
import React from "react";
import ImageUploading from "react-images-uploading";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export function ImageUpload() {
    const [images, setImages] = React.useState([]);
    console.log(images);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <div
                            style={{
                                border: "1px solid rgba(0, 0, 0, 0.11)",
                                borderRadius: "8px",
                                position: "relative",
                                height: "140px",
                                color: isDragging ? "red" : undefined,
                            }}
                            className="w-15 text-center p-2"
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            {!isDragging
                                ? "Click to add thumbnail or Drop here"
                                : "Drop here"}
                            {imageList.map((image, index) => (
                                <Box
                                    key={index}
                                    className="image-item"
                                    style={{
                                        width: "100%",
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        height: "100%",
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onImageRemove(index);
                                    }}
                                >
                                    <img
                                        src={image["data_url"]}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "6px",
                                        }}
                                    />
                                    <div className="image-item__btn-wrapper">
                                        <Box
                                            className="remove-btn"
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform:
                                                    "translate(-50%, -50%)",
                                                color: "red",
                                                transition: ".3s ease",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => onImageRemove(index)}
                                        >
                                            <HighlightOffIcon
                                                sx={{
                                                    fontSize: "64px",
                                                    transition: ".3s ease",
                                                    "&:hover": {
                                                        fontSize: "72px",
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </div>
                                </Box>
                            ))}
                        </div>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}
