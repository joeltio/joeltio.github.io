import React, { useState, useEffect } from "react";

const Loading = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setText("Loading...");
        }, 300);

        return () => clearTimeout(timer);
    })

    return (
    <p>{text}</p>
    );
}

export default Loading;