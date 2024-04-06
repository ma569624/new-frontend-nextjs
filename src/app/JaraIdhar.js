import { useEffect, useState } from 'react';
// import { a } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdDoubleArrow } from "react-icons/md";


const JaraIdhar = (props) => {
  const responsive = {
    deskhrefp: {
      breakpoint: { max: 2000, min: 1044 },
      items: 5,
      slideshrefSlide: 3, // optional, default href 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slideshrefSlide: 2, // optional, default href 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slideshrefSlide: 1, // optional, default href 1.
    },
  };
  const [category, setCategory] = useState([])
  const router = useRouter();

  const handleClick = (id, category) => {
    router.push(`/inner/${id}`);
  };

  const [data, setdata] = useState([])
  const API = props.API;

  const MAX_WORDS = 8;

  function sliceByWords(text, maxWords) {
    const words = text.split(' ');
    const slicedText = words.slice(0, maxWords).join(' ');
    return slicedText;
  }

  useEffect(() => {
    setdata(props.idharbhi)
    setCategory(props.toplinks)
  }, [])


  return (
    <section className="features-area ">
      <div className="container">
        <div className="content-pad border pb-0">
          <div className="section-title d-flex align-items-center justify-content-center mb-2" style={{
            backgroundColor: 'rgb(6, 115, 196)',
            borderRadius: '18px',
            color: 'white',
            textShadow: 'rgb(21, 47, 130) 4px 4px',
            boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px',
          }}>
            <Image width={71} height={50} style={{ borderRadius: '8px', width: '80px', height: '50px', marginRight: '2px', padding: '2px', filter: 'drop-shadow(rgb(132, 85, 99) 4px 3px 1px)' }} className='me-4 ml-1' src={category.length > 0 ? `${API}${category[0].Image}` : ''} alt="" />
            <MdDoubleArrow  size={50} />
            <h2
              style={{
                padding: 4,
                margin: 0,
                fontSize: 21,
                color: 'white',
              }}
            >

              {
                category.length > 0 ? category[0].name : <></>
              }

            </h2>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="" style={{ gap: '6px' }}>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true}
                  infinite={true}
                  auhrefPlay={false}
                  auhrefPlaySpeed={1000}
                  keyBoardControl={true}
                  cushrefmTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={['tablet', 'mobile']}
                  deviceType={'deskhrefp'}
                  dotListClass="cushrefm-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {data.map((item, index) => (
                    <div key={index} className="min-h-100">
                      <div className="cat-sm-post min-h-100" style={{ backgroundColor: '#86042e', boxShadow: 'rgb(138 22 22 / 64%) 3px 4px 4px 1px', }}>
                        <div className="post__small mb-2" style={{ display: 'grid' }}>
                          <div className="post__small-thumb f-left">
                            <Image
                              width={227}
                              height={189}
                              src={item.Image && `${API}${item.Image}`}
                              style={{ width: 227, height: 138, borderBothrefm: '2px solid white', cursor: 'pointer' }}
                              alt="hero image"
                              onClick={handleClick}
                            />
                          </div>
                          <div className="post__small-text">
                            <h4 className="title-16 pr-0 mt-2 pl-2 pr-1" style={{ fontSize: '20px', fontWeight: 600, color: 'yellow', textShadow: 'rgb(8 12 6) 4px 4px', cursor: 'pointer' }} onClick={() => handleClick(item._id)}>
                              {/* {item.Heading.slice(0, 61)}... */}
                              {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}...
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default JaraIdhar;