import { useEffect, useState } from "react"
// import { NavLink, useParams } from "react-router-dom"
import Api from "../../Api/Api"
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, } from "react-share"
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import img from './img/printer-logo.png'
import charity from './img/Donate.svg'
import { Helmet } from 'react-helmet';
import Modal from 'react-modal';
import { FcShare } from "react-icons/fc";
import donate from './img/donate.jpg';
import instagram from './img/instagram.svg'
import email from './img/email.svg'
import YouTube from 'react-youtube';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(204 201 201)', // Change background color here
        border: '8px solid rgb(88 90 3)', // Add border for better visibility
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Add box shadow for a subtle effect
        borderRadius: '8px', // Add border radius for rounded corners
        padding: '20px', // Add padding for content spacing
        maxWidth: '680px', // Increase the width of the modal here
        width: '80%', // Set a percentage or pixel value for responsiveness

    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark color with 50% opacity
        zIndex: 1000, // Adjust the z-index as needed
    }
};


const Detail = () => {
    
    const params = useParams()
    const { id, Category } = params;
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;
    const [totalPages, setTotalPages] = useState(1);
    const [category, setCategory] = useState([])
    const [videos, setVideos] = useState([]);

    const [blogs, setBlogs] = useState([])
    const [data, setdata] = useState({})
    const [item, setItem] = useState({})
    // const API = "https://news-backend-production.up.railway.app";
    const API = "http://localhost:5000";

    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const [metadata, setMetaData] = useState([])

    const currentPageUrl = window.location.href;

    const title = 'My Page Title';

    const message = `Third Eye World News`;
    const hashtag = "ख़बर";

    const whatsAppUrl = `https://web.whatsapp.com:/send?text=${encodeURIComponent(
        ` ${hashtag}\n\n${message} \n${currentPageUrl} \n\n Hamare Sath jude rahane ke liye `
    )}`;
    const [sidename, setSideName] = useState([])
    const [sidenamerajiya, setSideNameRajiya] = useState([])

    const pageTitle = "Details Page";
    const pageKeywords = "Details, Page, Keywords";
    const pageDescription = "Details page Description";

    const getdata = async () => {
        Api('toplinks').then((response) => {
            setCategory(response);
            // console.warn(toplink)
          })
            .catch((error) => {
              // Handle error
            });
        Api(`blogdisplay?SectionName=${Category}`).then((res) => {
            console.warn(res)
            // const data = res[0];
            setSideName(res[0])
        })
            .catch((err) => {

            })
        Api(`rajiya?StateName=${Category}`).then((res) => {
            console.warn(res)
            // const data = res[0];
            setSideNameRajiya(res[0])
        })
            .catch((err) => {

            })

        console.warn(sidenamerajiya)
        Api(`blogs?_id=${id}`).then((res) => {
            console.warn(res.data[0])
            // const data = res[0];
            setdata(res.data[0]);
        })
            .catch((err) => {

            })


    }

    useEffect(() => {
        getdata()
        setCurrentPage(1)
    }, [id])

    // const [videos, setVideos] = useState([]);
    const apiKey = 'AIzaSyAvgv1F4OfE_gtDlAtaikPgNxd-uxy-lm0';
    // https://www.youtube.com/channel/UC4qhbs7b2TEy2_dmd2xxXzw

    const channelId = 'UC4qhbs7b2TEy2_dmd2xxXzw';
    console.warn(category)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
                );
                const data = await response.json();
                if (data.items) {
                    setVideos(data.items);
                } else {
                    console.error('No videos found');
                }
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchData();
    }, []);

    console.warn(currentPage)
    useEffect(() => {
        Api(`blogs?page=${currentPage}&limit=${limit}&Category=${Category}`)
            .then((res) => {
                console.warn(res)
                setBlogs(res.data);
            })
            .catch((err) => {
                // Handle errors
                console.error('Error fetching blogs:', err);
            });
    }, [currentPage, Category, limit, Api, id]);
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };
    // console.warn(blogs)
    const LoadingNewdata = (NewId) => {
        console.warn(blogs)
        console.warn(NewId)

        const filteredBlog = blogs.filter(item => item._id.toString() == NewId.toString());
        setdata(filteredBlog[0])
        console.warn(filteredBlog[0])
    }

    const Khabare = ({ Rajiya }) => {

        return (
            <div className="col-lg-4">
                <div className="section-title2 text-center">
                    <h2
                        style={{
                            backgroundColor: 'red',
                            color: 'white',
                            borderRadius: '40px',
                            padding: 13,
                            textShadow: 'rgb(21, 47, 130) 4px 4px',
                            boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px',
                            backgroundColor: 'rgb(235 91 10)'
                        }}
                    >

                        {
                            sidename && sidename.SecondSection
                        }

                        {sidenamerajiya && sidenamerajiya.FirstLink}

                    </h2>
                </div>

                {
                    blogs.map((item) => {
                        return (
                            <div className="hero pos-relative mb-2">
                                <div className="hero__thumb" data-overlay="dark-gradient" style={{ filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )' }}>
                                    <img
                                        src={`${API}${item.Image}`}
                                        style={{ height: 195, }}
                                        alt="hero image"
                                    />
                                </div>

                                <div className="hero__text" style={{ padding: "0px 15px" }}>
                                    <h3 className="">
                                        <NavLink onClick={(e) => LoadingNewdata(item._id)} style={{ fontSize: '22px', fontWeight: 600 }}> {item.Heading && item.Heading.slice(0, 57)}...</NavLink>
                                    </h3>
                                </div>

                            </div>
                        )
                    })
                }

                <div className="pagination text-center">
                    <ul>
                        <li style={{ boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px' }}>
                            {/* <a href="#">पिछली ख़बर</a> */}
                            <NavLink onClick={prevPage} disabled={currentPage === 1}>
                                पिछली ख़बर
                            </NavLink>
                        </li>

                        <li style={{ boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px' }}>
                            {/* <a href="#">अगली ख़बर</a> */}
                            <NavLink onClick={nextPage}>
                                अगली ख़बर
                            </NavLink>
                        </li>
                    </ul>
                </div>


                <div className="">
                    <div className="section-title mb-2" style={{
                        backgroundColor: 'red',
                        // backgroundColor: category.length > 0 ? category[2].background : 'transparent', color: color.TextColor2,
                        color: 'white',
                        textShadow: 'rgb(21, 47, 130) 4px 4px',
                        boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px',
                    }}>

                        <NavLink to={'/youtube'} className='d-flex align-items-center'>

                            <img style={{ width: '65px', height: '50px', }} className='me-2 ml-2' src={category.length > 0 ? `${API}${category[2].Image}` : ''} alt="" />
                            <h2
                                style={{
                                    padding: 8,
                                    margin: 0,
                                    fontSize: 18,
                                    color: 'white',
                                }}
                                className='flex-fill text-center'
                            >
                                {
                                    category.length > 0 ? category[2].name : <></>
                                }
                            </h2>
                        </NavLink>
                    </div>


                    <div className="postbox">
                        {/* <div dangerouslySetInnerHTML={{ __html: item.youTubelink }} /> */}
                        {videos.slice(0, 1).map((video) => (
                            <div key={video.id.videoId} >

                                {/* style={{ filter: 'drop-shadow(rgb(23, 137, 60) 7px 8px 13px)' }} */}
                                <div className="video">
                                    <YouTube class="card-img-top"
                                        videoId={video.id.videoId}
                                        // onReady={onReady}
                                        opts={{ width: '357', height: '320' }}
                                    />
                                </div>

                            </div>
                        ))}
                        <div className="section-title mb-2" style={{
                            backgroundColor: 'red',
                            // backgroundColor: category.length > 0 ? category[2].background : 'transparent', color: color.TextColor2,
                            color: 'white',

                            textShadow: 'rgb(21, 47, 130) 4px 4px',
                            boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px',
                        }}>
                            <NavLink to={'/youtube'} className='d-flex align-items-center'>

                                <img style={{ width: '65px', height: '50px', }} className='me-2 ml-2' src={category.length > 0 ? `${API}${category[2].Image}` : ''} alt="" />

                                <h2
                                    style={{
                                        padding: 8,
                                        margin: 0,
                                        fontSize: 18,
                                        color: 'white',
                                    }}
                                    className='flex-fill text-center'
                                >
                                    {/* {data[0].Heading} */}
                                    {
                                        category.length > 0 ? category[3].name : <></>
                                    }
                                </h2>

                            </NavLink>
                        </div>

                    </div>
                    {/* <div className="postbox mb-15"> */}
                    <div className="postbox__thumb">
                        <a href="#">
                            <img
                                src="img/ShowImage.gif"
                                alt="hero image"
                                style={{ height: 231, filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )' }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }


    const instagramProfileUrl = 'https://www.instagram.com';


    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        if (subtitle) {
            subtitle.style.color = '#ddd';
        }
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="keywords" content={pageKeywords} />
                <meta name="description" content={pageDescription} />
            </Helmet>

            <section className="post-details-area pt-3 pb-3" >
                <div className="container">
                    <div className="row" ref={componentRef}>
                        <div className="col-xl-8 col-lg-8" >
                            <div className="section-title2 text-center">
                                <h2
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'white',
                                        borderRadius: '40px',
                                        fontSize: '24px',
                                        padding: 13,
                                        textShadow: 'rgb(21, 47, 130) 4px 4px',
                                        boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px',
                                        backgroundColor: 'rgb(8 104 92)'
                                    }}
                                > {Category}
                                </h2>
                            </div>
                            <div className="post-details mt-2" >

                                <div ref={componentRef}>
                                    <h1 className="details-title mb-15 text-center" style={{ lineHeight: 1.5, fontWeight: 900, letterSpacing: '-1px' }}>
                                        {
                                            data && data.Heading !== undefined && data.Heading
                                        }

                                    </h1>
                                    <h4 className="mb-5 text-center" style={{ fontSize: '32px', fontWeight: 600, color: '#0a0ae2', lineHeight: 1.5 }}>
                                        {
                                            data && data.Subheading !== undefined && data.Subheading
                                        }
                                    </h4>
                                    <div className="post-content">
                                        <div class="postbox__text-meta pb-2 mb-2" >
                                            <ul>
                                                <li>
                                                    <i class="far fa-user-circle" style={{ fontSize: 12, color: '#000' }}></i>
                                                    <span className="pr-2" style={{ fontSize: 12, color: '#000' }}>आकाश श्रीवास्तव</span>
                                                </li>
                                                <li>
                                                    <i class="fas fa-calendar-alt " style={{ fontSize: 12, color: '#000' }}></i>
                                                    <span className="pr-2" style={{ fontSize: 12, color: '#000' }}>16 feb 2024</span>
                                                </li>
                                                <li><i class="far fa-clock" style={{ fontSize: 12, color: '#000' }}></i> <span className="pr-2" style={{ fontSize: 12, color: '#000' }}>12:03:00</span></li>
                                                <li><i class="far fa-clock" style={{ fontSize: 12, color: '#000' }}></i> <span className="pr-2" style={{ fontSize: 12, color: '#000' }}>Delhi</span></li>
                                                <li>
                                                    <i class="far fa-comment" style={{ fontSize: 12, color: '#000' }}></i>
                                                    <span style={{ fontSize: 12, color: '#000' }}>(03)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mb-4" style={{ display: "grid", gap: 2 }}>
                                            {
                                                data !== undefined && data.ReporterImage !== undefined && (
                                                    <img
                                                        src={`${API}${data.ReporterImage}`}
                                                        style={{ width: 87, height: 99, marginBottom: '10px', filter: 'drop-shadow(rgb(102, 102, 102) 6px 5px 4px)' }}
                                                        alt=""
                                                    />
                                                )
                                            }

                                            <strong style={{ fontSize: 15, color: '#000' }}>
                                                {
                                                    data !== undefined && data.ReporterName !== undefined && (
                                                        data.ReporterName
                                                    )
                                                }

                                            </strong>
                                            <strong style={{ fontSize: 15, color: '#000' }}>
                                                {data && data.DatePlace !== undefined ? data.DatePlace : 'No date available'}

                                            </strong>
                                            <strong style={{ fontSize: 15, color: '#000' }}>
                                                {data && data.Designation !== undefined && data.Designation}
                                            </strong>

                                        </div>
                                        <div className="post-thumb mb-25">
                                            <img
                                                title={data && data.Heading}
                                                src={data && `${API}${data.Image}`}
                                                style={{ width: 803, height: 454, filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )', marginBottom: '5px' }}
                                                alt={data && data.Heading}
                                            />
                                            <strong className="mt-2" style={{ fontSize: 15, color: '#000' }}>
                                                this is capition
                                            </strong>
                                        </div>

                                        <p style={{ fontSize: 18, lineHeight: 1.5 }}>
                                            {data && data.Matter && (
                                                <div dangerouslySetInnerHTML={{ __html: data.Matter }} />
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="row align-items-sm-center" style={{ marginTop: '50px' }}>
                                    <div className="col-lg-12 d-flex justify-content-between">
                                        <div className="d-flex gap-2">
                                            <div className="text-center">
                                                <div style={{ backgroundColor: 'red', padding: '3px 12px 3px 12px', borderRadius: '40px ', boxShadow: "rgb(255 0 0 / 53%) 3px 4px 4px 1px" }}>
                                                    <h4 className="text-right text-white m-0" style={{ fontWeight: 900, textShadow: 'rgb(21 47 130) 4px 4px' }}>
                                                        प्रिंट करें
                                                    </h4>
                                                </div>
                                                <button className="border-0 bg-white mt-2" onClick={handlePrint}>
                                                    <img src={img} alt="" style={{ filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )', width: '30px', height: '30px' }} />
                                                </button>
                                            </div>

                                        </div>
                                        <div className="text-center">
                                            <div style={{ backgroundColor: 'red', padding: '3px 12px 3px 12px', borderRadius: '40px ', boxShadow: "rgb(255 0 0 / 53%) 3px 4px 4px 1px" }}>
                                                <h4 className="text-right text-white m-0" style={{ fontWeight: 900, textShadow: 'rgb(21 47 130) 4px 4px' }}>
                                                    अपना सहयोग दें
                                                </h4>
                                            </div>
                                            <button className="border-0 bg-white mt-2" onClick={openModal}>
                                                <img src={charity} alt="" style={{ filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )', width: '30px' }} />
                                            </button>
                                        </div>
                                        <div>
                                            <div style={{ backgroundColor: 'red', padding: '3px 12px 3px 12px', borderRadius: '40px ', boxShadow: "rgb(255 0 0 / 53%) 3px 4px 4px 1px" }}>
                                                <h4 className="text-right text-white m-0" style={{ fontWeight: 900, textShadow: 'rgb(21 47 130) 4px 4px' }} >
                                                    शेयर करें
                                                </h4>
                                            </div>
                                            <ul className="article-share-icon mt-2">
                                                <li>
                                                    {/* <span> */}
                                                    <span style={{ height: '30px', width: '30px', backgroundColor: '#F1B717', borderRadius: '50%', position: 'relative', boxShadow: 'rgb(102, 102, 102) 3px 4px 4px 1px' }}>
                                                        <FcShare size={22} style={{ position: 'absolute', top: '15%', left: '9%', }} />
                                                    </span>
                                                    <ul class="article-share-platform">
                                                        <li>
                                                            <a
                                                                data-activity="whatsapp_share"
                                                                data-action="share/whatsapp/share"
                                                                href={whatsAppUrl}
                                                                className="m-0"
                                                                target="_blank"
                                                                aria-label="Share on WhatsApp"
                                                                data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!"
                                                            > <WhatsappIcon size={25} round style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} /> </a>
                                                        </li>
                                                        <li>
                                                            <FacebookShareButton url={currentPageUrl} quote={title} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }}>
                                                                <FacebookIcon title={'hello'} size={25} round={true} />
                                                            </FacebookShareButton>
                                                        </li>
                                                        <li>
                                                            <TwitterShareButton url={currentPageUrl} quote={title} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }}>
                                                                <TwitterIcon size={25} round={true} />
                                                            </TwitterShareButton>
                                                        </li>
                                                        <li>
                                                            <a
                                                                data-activity="instagram_share"
                                                                data-action="share/instagram/share"
                                                                href={instagramProfileUrl}
                                                                className="m-0"
                                                                target="_blank"
                                                                aria-label="Share on Instagram"
                                                                data-tooltip-id="my-tooltip"
                                                                data-tooltip-content="Share on Instagram"
                                                                style={{ display: 'block', border: 'none', width: '30px', height: '30px', position: 'relative', boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }}
                                                            >
                                                                <img src={instagram} style={{ position: 'absolute', top: '10%', left: '5%', width: '32px' }} />
                                                            </a>
                                                        </li>
                                                        <li>

                                                            <a
                                                                data-activity="instagram_share"
                                                                data-action="share/instagram/share"
                                                                href={instagramProfileUrl}
                                                                className="m-0"
                                                                target="_blank"
                                                                aria-label="Share on Instagram"
                                                                data-tooltip-id="my-tooltip"
                                                                data-tooltip-content="Share on Instagram"
                                                                style={{ display: 'block', border: 'none', width: '27px', height: '25px', position: 'relative', boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }}
                                                            >
                                                                <img src={email} alt="" />
                                                            </a>


                                                        </li>
                                                        <li>
                                                            <TelegramShareButton url={currentPageUrl} quote={title} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }}>
                                                                <TelegramIcon size={24} round={true} />
                                                            </TelegramShareButton>
                                                        </li>
                                                        <li>
                                                            <LinkedinShareButton url={currentPageUrl} quote={title} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }}>
                                                                <LinkedinIcon size={25} round={true} />
                                                            </LinkedinShareButton>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {data && data.Category && Array.isArray(data.Category) && data.Category.length > 0 && (
                            <Khabare Rajiya={data.Category[0]} />
                        )}

                    </div>
                </div>
            </section >
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="modal-new"
            >
                <div class="container text-center">
                    <div class="row justify-content-center">

                        <div className="mb-4" style={{ borderRadius: '4px ', boxShadow: "rgb(11 11 19 / 25%) 12px 12px 2px 1px" }}>
                            <img src={donate} alt="" width={160} />
                        </div>
                        <div className="mb-4" style={{ backgroundColor: 'red', padding: '3px 6px 3px 8px', borderRadius: '40px ', boxShadow: "rgba(255, 0, 0, 0.53) 3px 4px 4px 1px" }}>

                            <h4 className="text-right text-white mb-1" style={{ fontWeight: 900, fontSize: '18px', textShadow: 'rgb(21 47 130) 4px 4px', }}>
                                अपने साथ लगातार जुड़े रहने के लिए हमें अपना सहयोग दें/दान करें <span style={{ fontSize: '26px' }}>🙏</span>
                            </h4>
                        </div>
                        <div className="row m-lg-3">
                            <div class="col-sm-6">
                                <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>Account Name / खाता नाम</h5>
                            </div>
                            <div class="col-sm-6 text-center">
                                <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>Third Eye World News (Hindi)</h5>
                            </div>

                            <div class="col-sm-6 text-center">
                                <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>Account Number/खाता नंबर</h5>
                            </div>
                            <div class="col-sm-6 text-center">
                                <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>000705029296</h5>
                            </div>
                            <div class="col-sm-6 text-center">
                                <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>IFS Code/आईएफएस कोड</h5>
                            </div>
                            <div class="col-sm-6 text-center">
                                <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>ICIC0000007</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>

        </>
    )
}

export default Detail