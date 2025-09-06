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
    <div className='overflow-hidden'>
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