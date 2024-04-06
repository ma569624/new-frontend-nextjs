'use client'

import ApradJagat from './ApradJagat';
import { useEffect, useState } from 'react';
import VotPoll from "./VotPoll";
import KhabreRajiyoki from './KhabreRajiyoki'
import { FacebookIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from "react-share";
import JaraIdhar from "./JaraIdhar";
import Link from 'next/link';
import Model from './model';
import Advert from './Advert';
import Follow from './follow';



const Footer = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const API = props.API;

    function openModal() {
        setIsOpen(true);
    }


    return (
        <>
            <Model modalIsOpen={modalIsOpen} />

            <JaraIdhar API={API} idharbhi={props.idharbhi} toplinks={props.toplinks} />
            <Advert advert={props.advert} endpoint={'jara idhar below'} />
            <ApradJagat allblogs={props.allblogs} />
            <Advert advert={props.advert} endpoint={'khabare rajiyo top'} />


            <KhabreRajiyoki allblogs={props.allblogs} />
            <Advert advert={props.advert} endpoint={'upper vote poll'} />

            <VotPoll />
            <Advert advert={props.advert} endpoint={'footer upper'} />

            <div className="container">
                <footer
                    className="footer-bg"
                    style={{
                        background:
                            "radial-gradient(100% 225% at 100% 0%, #ff0202 0%, #d71d1d 100%), linear-gradient(236deg, #ff5000 0%, #dc113487 100%), linear-gradient(135deg, #CDFFEB 0%, #CDFFEB 36%, #009F9D 36%, #009F9D 60%, #f12315 60%, #c65f1e 67%, #0F0A3C 67%, #0F0A3C 100%)",
                        backgroundBlendMode: "overlay, hard-light, normal", borderRadius: '8px' , backgroundImage: 'url("/10009046.jpg")', backgroundSize: 'cover'
                    }}
                >
                    <div className="footer-bothrefm-area pt-1 pb-2">
                        <div className="container">
                            <div className="row mb-3 mt-3">
                                <div className="col-lg-12">
                                    <ul className="d-flex" style={{ gap: "1rem" }}>
                                        <li>

                                            <a href={'/team'} style={{ backgroundColor: '#c21515', color: 'white', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', border: 'none', borderRadius: '15px', padding: '10px 12px 10px 16px ', fontWeight: 'bold', fontSize: '16px' }}>
                                                हमारी टीम
                                            </a>
                                        </li>
                                        <li>
                                            <a href={'/contact'} style={{ backgroundColor: '#c21515', color: 'white', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', border: 'none', borderRadius: '15px', padding: '10px 12px 10px 16px ', fontWeight: 'bold', fontSize: '16px' }}>
                                                हमारा पता / संपर्क करें
                                            </a>
                                        </li>
                                        <li>
                                            <a href={'/rules'} style={{ backgroundColor: '#c21515', color: 'white', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', border: 'none', borderRadius: '15px', padding: '10px 12px 10px 16px ', fontWeight: 'bold', fontSize: '16px' }}>
                                                नियम और शर्तें
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="footer-widget">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 pr-0">
                                                <img
                                                    src="ShowImage.jpg"
                                                    className="border rounded"
                                                    alt=""
                                                    style={{ width: 120, boxShadow: "rgba(11, 11, 19, 0.25) 8px 6px 2px 1px" }}
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <ul>
                                                    <li>
                                                        <span className="text-white" style={{ textShadow: 'rgb(21, 47, 130) 4px 4px', fontWeight: 900 }}>
                                                            नाम
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-white" style={{ textShadow: 'rgb(21, 47, 130) 4px 4px', fontWeight: 900 }}>डेजीनेशन</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-white" style={{ textShadow: 'rgb(21, 47, 130) 4px 4px', fontWeight: 900 }}> ईमेल आईडी </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-white" style={{ textShadow: 'rgb(21, 47, 130) 4px 4px', fontWeight: 900 }}>
                                                            मोबाइल नंबर
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <Advert advert={props.advert} endpoint={'side mousam news'} /> */}

                    
                    <div className="copyright-area p-2" >
                        <div className="container">
                            <div className="row align-items-center">

                                <div className="col-lg-10">

                                    <ul className="d-flex align-items-baseline" style={{ gap: '18rem' }}>
                                        <li>
                                            <a href={'tel: 9999999999'} style={{ backgroundColor: '#c21515', border: '2px solid black', color: 'white', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', borderRadius: '15px', padding: '10px 12px 10px 16px ', fontWeight: 'bold', fontSize: '16px' }}>
                                                विज्ञापन के लिए संपर्क करें <span style={{ fontSize: '19px' }}>👈</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={openModal} style={{ backgroundColor: '#c21515', border: '2px solid black', color: 'white', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px',  borderRadius: '15px', padding: '10px 12px 10px 16px ', fontWeight: 'bold', fontSize: '16px' }}>
                                                अपना सहयोग दें <img src='donteicon' alt="" style={{ width: 22, marginLeft: 8 }} />
                                            </a>
                                        </li>

                                    </ul>

                                </div>

                                {/* <div className="col-xl-2 col-lg-2 col-md-6">


                                    <div className=" text-md-right">

                                        <ul className="article-share-icon1">
                                            <li>
                                                <button className='mt-2 ' style={{ backgroundColor: '#c21515', color: 'white', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', marginBottom: '9px', border: '2px solid black', borderRadius: '15px', padding: '9px 19px 11px 11px', fontWeight: '900' }}> <span style={{ fontSize: '18px' }}>👈</span> Follow  </button>

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
                                                            <img src={'youtube'} style={{ width: "36px", height: '36px' }} alt="" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={'https://twitter.com/TEWN2009'} className='text-white' style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} target='_blank'>
                                                            <TwitterIcon size={32} />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={'https://t.me/+tq7kyiSQp184ZTJl'} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} className='text-white' target='_blank'>
                                                           
                                                            <TelegramIcon size={32} />
                                                        </a>
                                                    </li>

                                                </ul>
                                            </li>
                                        </ul>

                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <Advert advert={props.advert} endpoint={'footer below'} /> */}

                    
                    <div className="copyright-area" style={{ paddinghrefp: 5, background: 'rgb(6, 115, 196)', borderRadius: '8px', border: '1px solid black' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-lg-12 col-md-6">
                                    <div className="copyright text-start p-1">
                                        <p className="text-center" style={{ fontWeight: 900, fontSize: '16px', textShadow: 'rgb(21, 47, 130) 4px 4px', }} >
                                            © Third Eye World News Copyrights 2024. All rights reserved.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <Advert advert={props.advert} endpoint={'copyright upper'} /> */}
                </footer>
            </div>
            <Follow />
        </>
    )
}

export default Footer;