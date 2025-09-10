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
        {/* Background Image Layer */}
        <div className="absolute inset-0 bg-[url('https://urban.rajasthan.gov.in/body_bg.96d9d8f9d5f8ab54.png')] bg-repeat bg-left-top" />

        {/* Overlay Layer (adjust color/opacity as needed) */}
        <div className="absolute inset-0 bg-white-900/10 mix-blend-multiply" />

        {/* Main Content Layer */}
        <div className="relative z-10">
          <Hero />
          <GetInvolved />
          <Article />
          <PressReleasesSection />
          <MediaSection />
          <QuizSection />
          <Involved/>
        </div>
      </div>
    </>
  )
}

export default Home
