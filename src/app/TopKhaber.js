'use client'
import { useEffect, useState } from 'react';
import Api from '../Api/Api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import Image from 'next/image';

const TopKhaber = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            Slide: 1, 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            Slide: 2, 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            Slide: 1, 
        },
    };
   
    const [data, setdata] = useState([])
    const API = props.API
   
    useEffect(() => {
        setdata(props.topKhabare)
    }, [])

    return (
        <section className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={{ backgroundColor: '#a01f1f', borderRadius: '7px', padding: 5, boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', }}>
                            <div className="" style={{ gap: '6px' }}>
                            
                                <Carousel
                                    swipeable={false}
                                    draggable={false}
                                    showDots={false}
                                    responsive={responsive}
                                    ssr={true}
                                    infinite={true}
                                    auhrefPlay={false}
                                    auhrefPlaySpeed={false}
                                    keyBoardControl={false}
                                    cushrefmTransition="all .5"
                                    transitionDuration={500}
                                    containerClass="carousel-container"
                                    removeArrowOnDeviceType={['tablet', 'mobile']}
                                    deviceType={'deskhrefp'}
                                    dotListClass="cushrefm-dot-list-style"
                                    itemClass="carousel-item-padding-40-px"
                                >
                                    {
                                        data && Array.isArray(data) && data.map((item, key) =>
                                            <div  key={key} className="" style={{ filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )', }}>
                                                <div className="hero pos-relative" style={{ minHeight: 165 }}>
                                                    <div className="hero__thumb" data-overlay="dark-gradient">
                                                        <Image
                                                            width={165}
                                                            height={165}
                                                            src={`${API}${item.Image}`}
                                                            style={{ height: 165, borderRadius: '8px' }}
                                                            alt="hero image"
                                                        />
                                                    </div>
                                                    <div className="hero__text hero__text-small">
                                                        <h3 className="pr-0" style={{ fontWeight: 900, textShadow: 'rgb(21 47 130) 4px 4px' }}>
                                                            <Link href={`/inner/${item._id}/TopKhabare`}>{item.Heading.slice(0, 40)} ...</Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopKhaber;
