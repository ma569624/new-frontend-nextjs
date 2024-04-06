import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SideNews = ({ data, category }) => {
  const API = 'http://localhost:5000' ;

  const router = useRouter();

  // Function to handle link click
  const handleClick = () => {
      router.push(`/inner/${data._id}`);
  };

  return (
    <div className="post__small mb-1" >
      <div className="post__small-thumb f-left">
        <a href="#">
        
          <Image
            width={132}
            height={90}
            src={`${API}${data.Image}`}
            alt="hero image"
            style={{borderRadius: '8px', cursor: 'pointer', width: 132, height: 90, filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )' }}
            onClick={handleClick} 
          />
        </a>
      </div>
      <div className="post__small-text fix  pl-10">
        <h4 className="title-13 pr-0 mb-0 blueheading" onClick={handleClick} style={{cursor: 'pointer'}}>
            {data.Heading.slice(0, 50)}
        </h4>
      </div>
    </div>
  )
}


export default SideNews