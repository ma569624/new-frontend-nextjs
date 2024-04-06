import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const MainNews = ({ data, category }) => {
    const router = useRouter();

    // Function to handle link click
    const handleClick = () => {
        router.push(`/inner/${data._id}`);
    };
    const API = 'http://localhost:5000';

    return (
        <div className="postbox mb-25">
            <div className="postbox__thumb">
                <Image
                    width={752}
                    height={275}
                    src={data.Image && `${API}${data.Image}`}
                    style={{ borderRadius: '8px',cursor:'pointer', width: 752, height: 275, filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )' }}
                    alt="hero image" onClick={handleClick}
                />
            </div>
            <div className="postbox__text pt-10">
                <h4 className="title-18 pr-0 mainheading" style={{cursor:'pointer'}} onClick={handleClick} >
                    {data.Heading}
                </h4>
                <h4 className="title-16 pr-0">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: data && data.Matter ? data.Matter.slice(0, 250) : "" }} />
                    </div>
                </h4>
            </div>
        </div>
    )
}

export default MainNews