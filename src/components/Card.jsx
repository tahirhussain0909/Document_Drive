/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
// import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";

function Card({ data, reference }) {
    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.2 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            className="relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
        >
            <FaRegFileAlt />
            <p className="text-sm leading-tight mt-5 font-semibold">
                {data.description}
            </p>
            <div className="footer absolute bottom-0 w-full left-0 ">
                <div className="flex items-center justify-between px-8  py-3 mb-3">
                    <h5>{data.filesize}</h5>
                    <span className="w-7 h-7 rounded-full flex items-center justify-center">
                        {data.close ? (
                            <IoCloseCircleSharp size="1.4em" />
                        ) : (
                            <MdDownloadForOffline size="1.4em" />
                        )}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div
                        className={`tag w-full h-[70px] ${
                            data.tag.tagColor === "green"
                                ? "bg-green-600"
                                : "bg-sky-600"
                        } py-4 flex items-center justify-center`}
                    >
                        <h3 className="text-sm font-semibold">
                            {data.tag.tagTitle}
                        </h3>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default Card;
