import React, { useState, useEffect } from 'react'
import Shortener from './Shortener';
import History from './History';
import shortener from '../api/shortener';
import recognition from '../assets/icon-brand-recognition.svg'
import records from '../assets/icon-detailed-records.svg'
import customizable from '../assets/icon-fully-customizable.svg'

const MainBody = ({ history, setHistory }) => {
  const [link, setLink] = useState(``);
  const [shortLink, setShortLink] = useState(``);
  const [fetchError, setFetchError] = useState(null);

  const shortenLink = async () => {
    setFetchError(null);

    try{
      const response = await shortener.get(`/shorten?url=${link}`);
      setShortLink(response.data.result.full_short_link);
    } catch(err) {
      if (err.response) {        
        if (link == ``) {
          setFetchError(`Please add a link`);
        } else {
          setFetchError(err.response.data.error);
        }
      } else {
        setFetchError(err.message);
      }
    }
  }

  useEffect(() => {
    const logToHistory = () => {
    
      const id = history.length > 0 ? history[0].id + 1 : 1;
      const newEntry = {id, link, shortLink};

      const newHistory = [newEntry, ...history]

      if (newHistory.length > 3) {
        newHistory.pop();
      }
      
      localStorage.setItem(`Shortlink History`, JSON.stringify(newHistory));
     
     
     setHistory(newHistory);
  }

  if (link && shortLink) {
    logToHistory();
    setLink(``);
    setShortLink(``);
  }

  }, [shortLink])

  return (
    <section className='bg-gray-200 px-6 py-12 pb-20'>
        <Shortener 
          link={link} 
          setLink={setLink} 
          shortenLink={shortenLink}
          fetchError={fetchError}
        />

        <History history={history} />

        <article className='text-center mt-20 flex flex-col items-center'> 
          <h2 className='text-violet-extraDark font-bold text-3xl'>Advanced Statistics</h2>
          <p className='text-violet-gray mt-4'>Track how your links are performing across the web with our advanced statistics dashboard.</p>

          <div className='mt-20 flex flex-col gap-24 relative before:absolute before:top-0 before:w-[2%] before:h-full before:left-[49%] before:bg-cyan'>
            <div className='flex flex-col items-center p-6 pt-16 pb-10 bg-white rounded-lg relative'>
              <div className='p-5 mt-5 rounded-full bg-violet-dark absolute -top-1/4'>
                <img src={recognition} alt="" className=''/>
              </div>

                <h3 className='text-violet-extraDark text-2xl font-bold '>Brand Recognition</h3>
                <p className='text-violet-gray mt-3'>Boost your brand recognition with each click. Generic llinks don't mean a thing. Branded links help instil confidence in your content.</p>
            </div>

            <div className='flex flex-col items-center p-6 pt-16 pb-10 bg-white rounded-lg relative'>
              <div className='p-5 mt-5 rounded-full bg-violet-dark absolute -top-1/4'>
                <img src={records} alt="" className=''/>
              </div>

                <h3 className='text-violet-extraDark text-2xl font-bold '>Detailed Records</h3>
                <p className='text-violet-gray mt-3'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>

            <div className='flex flex-col items-center p-6 pt-16 pb-10 bg-white rounded-lg relative'>
              <div className='p-5 mt-5 rounded-full bg-violet-dark absolute -top-1/4'>
                <img src={customizable} alt="" className=''/>
              </div>

                <h3 className='text-violet-extraDark text-2xl font-bold '>Fully Customizable</h3>
                <p className='text-violet-gray mt-3'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
          </div>
        </article>
    </section>
  )
}

export default MainBody