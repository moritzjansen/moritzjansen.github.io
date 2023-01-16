import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'

function IndexPage(){

  function hover(element){
    console.log(element)
    element.target.setAttribute('src', '/images/jungle-embrace.jpg')
  }

  function unhover(element) {
    element.target.setAttribute('src', '/images/fog.jpg');
  }

  return (
  <Layout title="Home">
    <div className='flex flex-col mx-auto items-start justify-start h-full pt-10 gap-3 max-w-3xl px-10 shadow-2xl bg-[#00000044]'>
      <img className=' self-center rounded-full border-white border-8 shadow-2xl transition-transform hover:scale-110' src="/images/fog.jpg" alt="me in the fog" width="256" height="256" onMouseOver={hover} onMouseLeave={unhover}></img>
      <h1 className='text-5xl text-white'>Hi there! 👋</h1>
      <p className='text-white text-lg'>
        My name is Mo and this is my website (WIP)!
      </p>
      <p className='text-white text-lg'>
        For my latest projects check out my <a target="_blank" rel="noopener noreferrer" className='underline' href='https://github.com/moritzjansen'>GitHub</a> page.
      </p>
      <p className='text-white text-lg'>
      In my last project I tried out Next.JS and TailwindCSS to build a color guessing game. Check it out <a target="_blank" rel="noopener noreferrer" className='underline' href='https://bigbraindle.mojansen.com'>here</a>!
      </p>
    </div>
    
  </Layout>
  )
}

export default IndexPage
