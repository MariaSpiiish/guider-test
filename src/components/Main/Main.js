import Intro from "../Intro/Intro"
import LatestNews from "../LatestNews/LatestNews"
import Promo from "../Promo/Promo"
import RecentWork from "../RecentWork/RecentWork"
import Services from "../Services/Services"
import Testimonials from "../Testimonials/Testimonials"
import VideoBlock from "../VideoBlock/VideoBlock"

function Main() {
  return (
    <main>
        <Intro />
        <Promo />
        <Services />
        <RecentWork />
        <VideoBlock />
        <LatestNews />
        <Testimonials />
    </main>
  )
}

export default Main