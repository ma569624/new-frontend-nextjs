import { useEffect, useState } from 'react';
import Api from '../../Api/Api';
// import { NavLink } from 'react-router-dom';
// import MainNews from '../../component/newscomponent/MainNews';
import News from '../../component/newscomponent/News';
import './style.css'

const Rajiya = ({ color }) => {

    const API = "https://news-backend-production.up.railway.app";
    const [data, setdata] = useState([])
    const [blogs, setBlogs] = useState([])
    const [id, setid] = useState("");
    const [category, setCategory] = useState([])

    const getdata = async () => {

        Api('rajiya').then((response) => {
            // const reversedData = response.reverse();
            setdata(response);
        })
            .catch((error) => {
                // Handle error
            });

        // const response = await fetch('https://api.example.com/data');
        // setBlogs
        Api('blogs?Position=rajiya').then((response) => {
            setBlogs(response);
            console.warn(response)
        })
            .catch((error) => {
                // Handle error
            });
    }

    useEffect(() => {
        // setBlogs(Allblog)
        getdata();
        setdata(data)
    }, [])

    const MainNews = ({ data }) => {
        const API = "https://news-backend-production.up.railway.app";

        // console.warn(data)
        return (
            <div className="postbox mb-25">
                <div className="postbox__thumb">
                    <a href="#">
                        <img
                            src={`${API}${data.Image}`}
                            style={{ width: 722, height: 200, filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )' }}
                            alt="hero image"
                        />
                    </a>
                    {/* <span className="post-cat post-absolute">
                        <a href="#">politic</a>
                    </span> */}
                </div>
                <div className="postbox__text pt-10">
                    <h4 className="title-18 pr-0 mainheading" >
                        <NavLink to={`/inner/${data._id}`}>
                            {data.Heading.slice(0, 69)} ...
                        </NavLink>
                    </h4>
                    <h4 className="title-16 pr-0">
                        <div >
                            <div dangerouslySetInnerHTML={{ __html: data.Matter.slice(0, 140) }} />
                        </div>
                    </h4>
                </div>

            </div>

        )
    }
    const NewsRow = ({ Rajiya }) => {

        const [data, setData] = useState([])
        useEffect(() => {
            // function getCategory(categoryArrayString) {
            //   // Parse the string inside the array to extract the actual category value
            //   const categoryArray = JSON.parse(categoryArrayString);
            //   // Assuming only one category is present in the array
            //   return categoryArray[0];
            // }

           

            let filter = blogs.filter((item) => item.Position == 'rajiya' && item.Category == Rajiya)
            setData(filter.reverse())
            // setData(data.reverse())
        }, [Rajiya])
        // console.warn(blogs)
        return (
            <div className="row ">
                <div className="col-lg-12">
                    <div className="section-title">

                        <div className="row ">
                            <div className="col-lg-3" style={{ paddingRight: 0 }}>

                                {
                                    data.length > 0 ? <MainNews data={data[0]} /> : <></>
                                }
                            </div>

                            <div className="col-lg-3" style={{ paddingRight: 0 }}>

                                {
                                    data.length > 1 ? <MainNews data={data[1]} /> : <></>
                                }
                            </div>
                            <div className="col-lg-3" style={{ paddingRight: 0 }}>

                                {
                                    data.length > 2 ? <MainNews data={data[2]} /> : <></>
                                }
                            </div>
                            <div className="col-lg-3" >

                                {
                                    data.length > 3 ? <MainNews data={data[3]} /> : <></>
                                }
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        )
    }
    // console.warn(data)
    return (
        <>
            <section className="news-area pt-2 pb-2">
                {/* trendy news */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2
                                    style={{
                                        backgroundColor: color.BackgroundColor2, color: color.TextColor2,

                                        padding: 10,
                                        textShadow: 'rgb(21, 47, 130) 4px 4px',
                                        boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px',
                                    }}
                                >

                                    ख़बरें राज्यों से
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* trendy news end */}
            </section>

            <section className="news-area pt-2 pb-2">
                {
                    data.map((item) => (

                        <div>

                            <div className="container pb-5">
                                <div className="row ">
                                    <div className="col-lg-12">
                                        <div className="section-title">
                                            <h2
                                                style={{
                                                    backgroundColor: color.BackgroundColor2,
                                                    color: color.TextColor2,
                                                    padding: 13,
                                                    textShadow: 'rgb(21, 47, 130) 4px 4px',
                                                    boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px',
                                                }}
                                            >
                                                {/* {data[0].Heading} */}
                                                {item.StateName}
                                            </h2>
                                        </div>

                                    </div>
                                    {/* <div className="col-20 ">
                                        <div className="section-title text-center">
                                            <h2 style={{
                                                backgroundColor: color.BackgroundColor2, color: color.TextColor2, padding: 10, textShadow: 'rgb(21, 47, 130) 4px 4px',
                                                boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px',
                                            }}>

                                                {item.FirstLink}
                                            </h2>
                                        </div>

                                    </div> */}
                                </div>
                                <NewsRow Rajiya={item.StateName} />
                                <div className="row ">
                                    <div className="col-lg-12">
                                        <div className="d-flex justify-content-between">
                                        
                                            <button className='btn ' style={{ fontSize: '18px', backgroundColor: 'green' }}>पिछली ख़बर</button>
                                            <button className='btn btn-primary' style={{ fontSize: '18px',backgroundColor: 'green' }}>अगली ख़बर</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>))
                }
            </section>
        </>
    )

}

export default Rajiya