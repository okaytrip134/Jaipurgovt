import React from 'react'
import Hero from './Hero'
import Article from './article'
import GetInvolved from './GetInvolved'
import MediaSection from './MediaSection'
import PressReleasesSection from './PressReleaseSection'
import QuizSection from './QuizSection'
import Involved from './importantli'

const Home = () => {
  return (
    <>
      <div className="relative overflow-hidden">

        {/* Main Content Layer */}
        <div className="relative z-10">
          <Hero />
          <GetInvolved />
          <Article />
          <PressReleasesSection />
          <MediaSection />
          {/* <QuizSection /> */}
          <Involved />
        </div>
      </div>
    </>
  )
}

export default Home
