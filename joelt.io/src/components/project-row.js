import React from 'react';
import Img from 'gatsby-image';

import { scale, rhythm } from '../utils/typography';

const ProjectRow = ({
    name,
    date,
    link,
    children,
    fgColor,
    bgColor,
    bgFluidSharp,
}) => {
    let bgImg;
    const extraContainerStyles = {};
    if (typeof bgColor === 'string') {
        extraContainerStyles.backgroundColor = bgColor;
    } else if (bgFluidSharp !== undefined && bgFluidSharp !== null) {
        bgImg = (
            <div
                style={{
                    position: 'relative',
                    height: '100%',
                }}
            >
                <Img
                    fluid={bgFluidSharp}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        zIndex: -1,
                    }}
                    alt=""
                />
            </div>
        );
    }

    if (typeof fgColor === 'string') {
        extraContainerStyles.color = fgColor || 'initial';
    }

    return (
        <div
            style={{
                borderRadius: '6px',
                border: '1px solid #e1e4e8',
                marginTop: '16px',
                marginBottom: '16px',
                overflow: 'hidden',
                ...extraContainerStyles,
            }}
        >
            {bgImg}
            <div
                style={{
                    boxSizing: 'border-box',
                    padding: '16px',
                }}
            >
                <h3
                    style={{
                        marginTop: 0,
                        marginBottom: 0,
                    }}
                >
                    <a
                        href={link}
                        style={{
                            color: fgColor || 'initial',
                        }}
                    >
                        {name}
                    </a>
                </h3>
                <p
                    style={{
                        ...scale(-1 / 5),
                        display: 'block',
                        marginBottom: rhythm(1 / 2),
                    }}
                >
                    {date}
                </p>
                <p
                    style={{
                        marginBottom: 0,
                    }}
                >
                    {children}
                </p>
            </div>
        </div>
    );
};

export default ProjectRow;
