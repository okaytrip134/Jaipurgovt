import React from 'react'
import Hero from './Hero'
import Article from './article'
import GetInvolved from './GetInvolved'
import MediaSection from './MediaSection'
import PressReleasesSection from './PressReleaseSection'
import QuizSection from './QuizSection'
import Involved from './Involved'

const Home = () => {
  return (
    <>
    <div className="overflow-hidden bg-[url('https://urban.rajasthan.gov.in/body_bg.96d9d8f9d5f8ab54.png')] bg-repeat bg-left-top">
    <Hero/>
    <GetInvolved/>
    <Article/>
    <PressReleasesSection/>
    <MediaSection/>
    <QuizSection/>
    <Involved/>
    </div>
    </>
  )
}

export default Home