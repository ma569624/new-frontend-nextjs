
import Home from './Home';
const page = async () => {
  const API = process.env.API
  const toplinks = await fetch(`${API}/api/toplinks`).then((res) => res.json())
  const advert = await fetch(`${API}/api/advert?Status=active`).then((res) => res.json())
  const todaynews = await fetch(`${API}/api/blogs?Status=active&Category=primenews`).then((res) => res.json())
  const badikhabar = await fetch(`${API}/api/blogs?Status=active&Category=mainnews`).then((res) => res.json())

  return (

      <>
      <Home API={API} toplinks={toplinks} advert={advert} badikhabar={badikhabar.data} todaynews={todaynews.data} />
    </>
  )
}



export default page