'use client'

import { useEffect, useRef, useState } from 'react';
import BreakingNew from './BreakingNew';
import { FacebookIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Scrollbars } from 'react-custom-scrollbars-2';
import TopKhaber from './TopKhaber';
import { AiOutlineHome } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';
import Model from './model';
import Advert from './Advert';
import { MdAccessTime } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { IoHome } from "react-icons/io5";

const Header = (props) => {

    const [blogs, setBlogs] = useState([])

    const [tagline, setTagline] = useState([])
    const [advert, setAdvert] = useState([])
    const [data, setdata] = useState([])
    const [rajiya, setRajiya] = useState([])

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000)
    }, [])

    const API = props.API;


    useEffect(() => {
        setAdvert(props.advert)
        setTagline(props.tagline[0]);
        setBlogs(props.data.data);
        setdata(props.blogdisplay.filter((item) => item.isHeader === true));
        setRajiya(props.rajiya)
    }, [])

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    console.warn
    return (
        <>
            <Model modalIsOpen={modalIsOpen} />
            <header className="header ">
                <div style={{ position: 'fixed', top: '0', left: '5px', zIndex: '999' }}>

                    <div className="d-grid justify-content-center mb-1 mt-1" >
                        {

                            advert.filter(item => item.location.includes('left home')).slice(0, 1).map((item) => (
                                <a target='_blank' href={item.url ? item.url : `${API}${item.Image2}`}>
                                    <Image width={180} height={725} src={item.Image1 && `${API}${item.Image1}`} alt="" />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className="container flex-lg-shrink-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header__top-area" >
                                <div className="d-flex justify-content-center mb-1 mt-1">
                                    {
                                        advert.filter(item => item.location.includes('top of header')).map((item) => (
                                            <a target='_blank' href={item.url ? item.url : `${API}${item.Image2}`}>
                                                <Image width={900} height={280} style={{ width: '900px', height: '280px' }} src={item.Image1 && `${API}${item.Image1}`} alt="" />
                                            </a>
                                        ))
                                    }
                                </div>
                                <div className="container">
                                    <div className="row align-items-center" style={{ backgroundColor: '#0673c4', border: '2px solid #0b0b0b', borderRadius: '8px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', }}>
                                        <div className="col-xl-5 col-lg-5 col-md-6">
                                            <div className="header__top-menu mt-1">
                                                <ul>
                                                    <li>
                                                        <Link href='tel: 9999999999' style={{ marginRight: '5px', backgroundColor: '#c21515', color: 'white', fontWeight: 900, textShadow: 'rgb(255 0 0 / 53%) 3px 4px 4px 1px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', marginBottom: '9px', border: 'none', borderRadius: '15px', padding: '6px 12px 2px 16px ', fontWeight: 'bold', fontSize: '15px' }}>
                                                            विज्ञापन के लिए संपर्क करें 👈
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a onClick={openModal} style={{ backgroundColor: 'rgb(194, 21, 21)', padding: '3px 12px 3px 12px', borderRadius: '40px ', boxShadow: "rgb(255 0 0 / 53%) 3px 4px 4px 1px" }}>
                                                            <h4 className="text-right text-white m-0" style={{ fontWeight: 900, textShadow: 'rgb(21 47 130) 4px 4px', fontSize: '15px' }}>
                                                                अपना सहयोग दें <Image width={24} height={25} src={'Donate.svg'} alt="" style={{ width: 24, marginLeft: 8 }} />
                                                            </h4>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-xl-2 col-lg-2 col-md-6">
                                            <ul>
                                                <li>
                                                    <Link className='' href='tel: 9999999999' style={{ marginRight: '5px', backgroundColor: '#c21515', color: 'white', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', boxShadow: 'rgb(255 0 0 / 53%) 3px 4px 4px 1px', marginBottom: '9px', border: 'none', borderRadius: '15px', padding: '6px 12px 9px 16px', fontWeight: 'bold', fontSize: '15px' }}>
                                                        सब्सक्राइब करें <FaBell size={17} />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-xl-3 col-lg-3 col-md-6">
                                            <ul>
                                                <li>
                                                    <a style={{ marginRight: '5px', backgroundColor: '#c21515', color: 'white', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', boxShadow: 'rgb(255 0 0 / 53%) 3px 4px 4px 1px', marginBottom: '9px', border: 'none', borderRadius: '15px', padding: '6px 12px 9px 16px', fontWeight: 'bold', fontSize: '15px' }}>
                                                        ख़ोजें <FaSearch className='ml-4' />
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className="col-xl-2 col-lg-2 col-md-6">
                                            <div className=" text-md-right">
                                                <ul className="article-share-icon1">
                                                    <li>
                                                        <button className='mt-1 ' style={{ marginRight: '5px', backgroundColor: '#c21515', color: 'white', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', marginBottom: '9px', border: 'none', borderRadius: '15px', padding: '2px 8px 2px 8px ', fontWeight: 'bold', fontSize: '15px' }}> <span style={{ fontSize: '18px' }}>👈</span> Follow  </button>

                                                        <ul class="article-share-platform1">
                                                            <li>
                                                                <a href={'https://whatsapp.com/channel/0029Va65zjQKbYMGyJFMnh0y'} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} className='text-white' target='_blank'>
                                                                    <WhatsappIcon size={32} />
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href={'https://www.facebook.com/profile.php?id=100058813196394'} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} className='text-white' target='_blank'>
                                                                    <FacebookIcon size={32} />
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href={'https://www.youtube.com/channel/UC4qhbs7b2TEy2_dmd2xxXzw'} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} className='text-white' target='_blank'>
                                                                    <Image width={36} height={36} src={'youtube.svg'} style={{ width: "36px", height: '36px' }} alt="" />
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href={'https://twitter.com/TEWN2009'} className='text-white' style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} target='_blank'>
                                                                    <TwitterIcon size={32} />
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href={'https://t.me/+tq7kyiSQp184ZTJl'} className='text-white' style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} target='_blank'>
                                                                    {/* <i className="fab fa-instagram" /> */}
                                                                    <TelegramIcon size={32} />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mb-1">
                                    {
                                        advert.filter(item => item.location.includes('below header')).map((item) => (
                                            <a target='_blank' href={item.url ? item.url : `${API}${item.Image2}`}>
                                                <Image width={900} height={160} style={{ width: '900px', height: '160px' }} src={item.Image1 && `${API}${item.Image1}`} alt="" />
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>

                            <div
                                className="header__middle pt-1"
                                style={{ backgroundColor: 'red', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', borderRadius: '8px', backgroundImage: 'url("/10009046.jpg")', backgroundSize: 'cover' }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="">
                                            <div className="header__logo text-center">

                                                <img src='logo.png' alt="Header Logo" width={155} height={50} />
                                                <ul className='d-flex mt-1' style={{gap: '10px'}}>
                                                    <li style={{ color: 'white' }}>
                                                        <RxCalendar className='ml-1 mr-1' style={{ fontWeight: 600, fontSize: '13px', color: 'white' }} />
                                                        <span style={{ fontSize: '13px', fontWeight: 600, }}>
                                                            {date.toLocaleDateString('en-GB', {
                                                                weekday: 'long',
                                                                day: 'numeric',
                                                                month: 'short',
                                                                year: 'numeric',
                                                            })}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        
                                                        <MdAccessTime size={15} className='mr-1' style={{ fontSize: '13px', fontWeight: 900, color: 'white' }} />
                                                        <span style={{ color: 'white', fontWeight: 600, fontSize: '13px' }} >{date.toLocaleString('en-US', {
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            second: 'numeric',
                                                            hour12: true,
                                                        })}
                                                        </span>

                                                    </li>
                                                </ul>
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="breaking__meta mt-2 mb-1">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-fill">
                                            <div
                                                className="header__add text-center"
                                                style={{ paddingBottom: 2 }}
                                            >
                                                {/* <h4 className='animate-charcter'>
                                                    आप देख रहे हैं Third Eye World News, अब नए तेवर और रंग रूप के साथ
                                                </h4> */}
                                                <h4 className='animate-charcter'>{tagline.Heading}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mb-1 ">
                                {
                                    advert.filter(item => item.location.includes('top menu')).map((item) => (
                                        <a target='_blank' href={item.url ? item.url : `${API}${item.Image2}`}>
                                            <Image width={900} height={160} style={{ width: '900px', height: '160px' }} src={item.Image1 && `${API}${item.Image1}`} alt="" />
                                        </a>

                                    ))
                                }
                            </div>
                            <div className="header__menu-area" style={{ backgroundColor: '#0673c4', borderRadius: '8px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', border: '2px solid #0b0b0b', backgroundImage: 'url(https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=740)' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="header__menu f-left">
                                                <nav id="mobile-menu">
                                                    <ul>
                                                        <li>
                                                            <Link href='/' style={{ marginRight: '24px' }}>
                                                                <IoHome style={{ color: 'yellow', fontWeight: 900, filter: 'drop-shadow(rgb(102, 102, 102) 6px 5px 1px)', fontSize: '15px' }} size={38} />
                                                            </Link>
                                                        </li>

                                                        {
                                                            data.map((item, key) =>
                                                                <li><a style={{ color: 'white', fontWeight: '900', textShadow: 'rgb(21, 47, 130) 4px 4px', fontSize: '15px' }} >{item.SectionName}<IoMdArrowDropdown size={30} /></a>
                                                                    <ul class="submenu">
                                                                        <Scrollbars style={{ width: 'auto', height: 400, backgroundColor: 'rgb(24 22 15)' }}>
                                                                            {
                                                                                blogs
                                                                                    .filter(blog => {
                                                                                        if (Array.isArray(blog.Category)) {
                                                                                            return blog.Category.includes(`${item.SectionName}`);
                                                                                        } else {
                                                                                            return blog.Category === `${item.SectionName}`;
                                                                                        }
                                                                                    }).slice(0, 5)
                                                                                    .map(filteredBlog => (
                                                                                        <li key={filteredBlog._id}>
                                                                                            <div className="d-grid align-items-center justify-content-around" style={{ backgroundColor: '#ddd !impotant' }}>
                                                                                                <Image width={190} height={110} src={filteredBlog.Image && `${API}${filteredBlog.Image}`} className='' style={{ width: 190, height: 110 }} alt="" /> {/* Assuming the blog object has an 'image' property */}
                                                                                                <h4 className='text-white m-0 mt-2' style={{ fontSize: '16px', fontWeight: 600 }}>{filteredBlog.Heading}</h4> {/* Assuming the blog object has a 'name' property */}
                                                                                            </div>
                                                                                        </li>
                                                                                    ))}

                                                                        </Scrollbars>
                                                                    </ul>
                                                                </li>)
                                                        }
                                                        <li><a href={`/rajiya`} style={{ color: 'white', fontWeight: '900', textShadow: 'rgb(21, 47, 130) 4px 4px', }} >ख़बरें राज्यों से<IoMdArrowDropdown size={30} /></a>
                                                            {
                                                                rajiya.map((item, key) =>

                                                                    <ul class="submenu">
                                                                        <Scrollbars style={{ width: 'auto', height: 400 }}>
                                                                            {blogs
                                                                                .filter(blog => {
                                                                                    // Check if Category is an array
                                                                                    if (Array.isArray(blog.Category)) {
                                                                                        // Check if the specified category is included in the Category array
                                                                                        return blog.Category.includes(`${item.StateName}`);
                                                                                    } else {
                                                                                        // Otherwise, directly compare with the Category value
                                                                                        return blog.Category === `${item.StateName}`;
                                                                                    }
                                                                                })
                                                                                .map(filteredBlog => (
                                                                                    <li key={filteredBlog._id}>
                                                                                        <a href={`inner/${filteredBlog._id}/${item.StateName}`}>
                                                                                            <div className="d-grid align-items-center justify-content-around">

                                                                                                <Image width={180} height={110} src={filteredBlog.Image && `${API}${filteredBlog.Image}`} className='' style={{ width: 180, height: 110 }} alt="" /> {/* Assuming the blog object has an 'image' property */}
                                                                                                <h3 className='text-white m-0  text-center' style={{ textDecoration: 'underline', fontSize: '16px', fontWeight: 800 }}>{item.StateName.slice()}</h3> {/* Assuming the blog object has a 'name' property */}
                                                                                                <h4 className='text-white m-0 ' style={{ fontSize: '16px', fontWeight: 600 }}>{filteredBlog.Heading.slice()}</h4> {/* Assuming the blog object has a 'name' property */}

                                                                                            </div>
                                                                                        </a>
                                                                                    </li>
                                                                                ))}
                                                                        </Scrollbars>

                                                                    </ul>
                                                                )
                                                            }
                                                        </li>

                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="mobile-menu" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mb-1">
                                {
                                    advert.filter(item => item.location.includes('below menu')).map((item) => (
                                        <a target='_blank' href={item.url ? item.url : `${API}${item.Image2}`}>
                                            <Image width={900} height={160} style={{ width: '900px', height: '160px' }} src={item.Image1 && `${API}${item.Image1}`} alt="" />
                                        </a>

                                    ))
                                }
                            </div>


                        </div>
                    </div>
                </div>
                <div className="d-grid justify-content-center mb-1" style={{ position: 'fixed', top: '0', right: '5px', zIndex: '999' }}>
                    {
                        advert.filter(item => item.location.includes('right home')).slice(0, 1).map((item) => (
                            <a target='_blank' href={item.url ? item.url : `${API}${item.Image2}`}>
                                <Image width={180} height={725} style={{ width: '180px', height: '725px' }} src={item.Image1 && `${API}${item.Image1}`} alt="" />
                            </a>

                        ))
                    }
                </div>
            </header>
            <BreakingNew />
            {/* <Advert advert={props.advert} endpoint={'below breaking News'} /> */}
            <TopKhaber API={API} topKhabare={props.topKhabare} />
            {/* <Advert advert={props.advert} endpoint={'below scroll news'} /> */}

        </>
    )
}

export default Header;