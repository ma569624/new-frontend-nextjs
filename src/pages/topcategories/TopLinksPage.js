import React, { useEffect, useState } from 'react'
// import { NavLink, useParams } from 'react-router-dom'
import Api from '../../Api/Api';

const TopLinksPage = () => {
    const params = useParams()
    const { toplinks } = params;
    const [color, setcolor] = useState([])
    const [data, setData] = useState([])
    const [categorieName, setcategorieName] = useState([])

    const getdata = () => {

        Api(`toplinks?link=${params.toplinks}`).then((response) => {
            console.warn(response[0])
            setcategorieName(response[0]);
        })
            .catch((error) => {
                // Handle error
            });
        Api('colors').then((response) => {
            setcolor(response[0]);
        })
            .catch((error) => {
                // Handle error
            });

        Api(`blogs?Position=${params.toplinks}`).then((response) => {
            setData(response);
        })
            .catch((error) => {
                // Handle error
            });
    }

    useEffect(() => {
        getdata()
    }, [params])
    return (
        <>
            <section className='mt-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 style={{
                                    backgroundColor: color.BackgroundColor2,
                                    color: color.TextColor2, padding: 10
                                }}>
                                    {categorieName.name}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.map((val) => {
                                return (
                                    <div className="col-md-4">
                                        <div className="postbox__thumb">
                                            <a href="#">
                                                <img
                                                    src={val.Image}
                                                    style={{ width: 752, height: 275 }}
                                                    alt="hero image"
                                                />
                                            </a>
                                            <span className="post-cat post-absolute">
                                                <a href="#">politic</a>
                                            </span>
                                        </div>
                                        <div className="postbox__text pt-10">
                                            <h4 className="title-18 pr-0" style={{ fontWeight: 600 }}>
                                                <NavLink to={`/inner/${val._id}`}>
                                                    {val.Heading}
                                                </NavLink>
                                            </h4>
                                            <h4 className="title-16 pr-0">
                                                <div >
                                                    <div dangerouslySetInnerHTML={{ __html: val.Matter.slice(0, 400) }} />
                                                </div>
                                            </h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
                </div>

            </section>
        </>
    )
}

export default TopLinksPage
