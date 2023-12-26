/* eslint-disable react/jsx-key */
// import React from 'react'
import { useRef, useState } from "react";

import Card from "./Card";

function Foreground() {
    const ref = useRef(null);

    const data = [
        {
            description: "lorem ipsum dolor sit amet, consectetur adip",
            filesize: ".2mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download",
                tagColor: "green",
            },
        },
        // {
        //     description: "lorem ipsum dolor sit amet, consectetur adip",
        //     filesize: ".2mb",
        //     close: false,
        //     tag: {
        //         isOpen: true,
        //         tagTitle: "Download",
        //         tagColor: "green",
        //     },
        // },
        // {
        //     description: "No Data, Please Upload if You need.",
        //     filesize: "0mb",
        //     close: true,
        //     tag: {
        //         isOpen: false,
        //         tagTitle: "Download",
        //         tagColor: "green",
        //     },
        // },
    ];
    useState();
    return (
        <>
            <div
                ref={ref}
                className="fixed top-0 left-0 z-[3] w-full h-full flex gap-9 flex-wrap p-5"
            >
                {data.map((item) => (
                    <Card data={item} reference={ref} />
                ))}
            </div>
        </>
    );
}

export default Foreground;
