import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ color }) => {

    const [videos, setVideos] = useState([]);
    const apiKey = 'AIzaSyCgyLsmQ-V1EgGXKXIxuPosIz7J2NlmE8w';
    // const apiKey = 'AIzaSyAvgv1F4OfE_gtDlAtaikPgNxd-uxy-lm0';
    // https://www.youtube.com/channel/UC4qhbs7b2TEy2_dmd2xxXzw
    // const channelId = 'UCkFBSp6KH8H312TFXIXaHQg';
    const channelId = 'UC4qhbs7b2TEy2_dmd2xxXzw';

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Calculate the date 10 days ago
                const tenDaysAgo = new Date();
                tenDaysAgo.setDate(tenDaysAgo.getDate() - 30);

                // Convert the date to ISO format
                const isoDate = tenDaysAgo.toISOString();
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=12&publishedAfter=${isoDate}`
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
    const opts = {
        width: '100%', height: '320',
        // playerVars: {

        //   autoplay: 1,
        // },
    };
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

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
                                    आपका अपना समाचार चैनल
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3" >
                        <div className="col-lg-12">
                            <div style={{ backgroundColor: '#91662d52', padding: 12, }}>

                                <div className="row">
                                    {videos.slice(0, 1).map((video) => (
                                        <div key={video.id.videoId} className="col-lg-12 mb-5">
                                            <div class="card min-h-100" style={{ backgroundColor: 'lightblue', boxShadow: 'rgb(255 0 0 / 26%) 3px 4px 4px 1px', minHeight: '100%' }} >
                                                {/* style={{ filter: 'drop-shadow(rgb(23, 137, 60) 7px 8px 13px)' }} */}
                                                <div className="video">
                                                    <YouTube class="card-img-top"
                                                        videoId={video.id.videoId}
                                                        // onReady={onReady}
                                                        opts={{width: '100%', height: '600',}}
                                                    />
                                                    <div class="card-body">
                                                        <h3 style={{ fontSize: '24px', fontWeight: 800, lineHeight: '34px' }}>{video.snippet.title}</h3>
                                                        {/* <p>{video.snippet.description}</p>
                                                <p>Published: {new Date(video.snippet.publishedAt).toLocaleDateString()}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {videos.slice(1, 12).map((video) => (
                                        <div key={video.id.videoId} className="col-lg-4 mb-5">
                                            <div class="card min-h-100" style={{ backgroundColor: 'lightblue', boxShadow: 'rgb(255 0 0 / 26%) 3px 4px 4px 1px', minHeight: '100%' }} >
                                                {/* style={{ filter: 'drop-shadow(rgb(23, 137, 60) 7px 8px 13px)' }} */}
                                                <div className="video">
                                                    <YouTube class="card-img-top"
                                                        videoId={video.id.videoId}
                                                        // onReady={onReady}
                                                        opts={opts}
                                                    />
                                                    <div class="card-body">
                                                        <h3 style={{ fontSize: '24px', fontWeight: 800, lineHeight: '34px' }}>{video.snippet.title}</h3>
                                                        {/* 
                                                            <p>{video.snippet.description}</p>
                                                            
                                                            <p>Published: {new Date(video.snippet.publishedAt).toLocaleDateString()}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* trendy news end */}
            </section >


        </>
    )

}

export default YouTubeVideo