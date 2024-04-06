import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const News = ({ data, category }) => {
  const API = 'http://localhost:5000'

  const router = useRouter();

  // Function to handle link click
  const handleClick = () => {
    router.push(`/inner/${data._id}`);
  };

  const MAX_WORDS = 10;

  function sliceByWords(text, maxWords) {
    const words = text.split(' ');
    const slicedText = words.slice(0, maxWords).join(' ');
    return slicedText;
  }
  // Inside your component


  return (
    <>
      <div style={{ minWidth: '190px', width: "205px !important", maxWidth: 'min-content' }} className="">
        {
          data.Image && (
            <Image
              width={190}
              height={153}
              src={data.Image && `${API}${data.Image}`}
              style={{ borderRadius: '8px', cursor: 'pointer', maxWidth: '190px', minHeight: '153px', filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )' }}
              alt="hero image"
              onClick={handleClick}
            />
          )
        }

        <h4 className="title-16 pr-0 blueheading" style={{cursor: 'pointer'}} onClick={handleClick}>
         {data.Heading && sliceByWords(data.Heading, MAX_WORDS)}...
        </h4>
      </div>
    </>
  )
}

export default News