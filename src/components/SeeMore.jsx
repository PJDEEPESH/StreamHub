import React, { useState } from 'react';

export default function TruncatedContent({ content, maxLines }) {
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    const contentStyle = {
        display: '-webkit-box',
        WebkitLineClamp: showFullContent ? 'unset' : maxLines,
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
    };

    return (
        <>
            <p style={contentStyle}>{content}</p>
            {!showFullContent && (
                <a style={{color:"aqua", cursor:"pointer",opacity:"1"}} href='#!' onClick={toggleContent}>Show more...</a>
            )}
            {showFullContent && (
                <a style={{color:"aqua",cursor:"pointer",opacity:"1"}} href='#!' onClick={toggleContent}>Show less</a>
            )}
        </>
    );
};

