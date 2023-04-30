import React, { useRef } from 'react'

const History = ({ history }) => {

  const copyShortLink = async (e, shortlink) => {
    await navigator.clipboard.writeText(shortlink);

    e.target.innerText = "Copied!";
    e.target.classList.replace(`bg-cyan`, `bg-violet-dark`)
  }
  
  return (
    <section className='mt-8 flex flex-col gap-8'>
        {history.length > 0 ? (
            history.map(entry => (
                <article key={entry.id} className='bg-white rounded-lg flex flex-col'>
                <p className='text-violet-extraDark p-3 border-b overflow-x-hidden text-ellipsis'>{entry.link}</p>
                <a href={entry.shortLink} target='_blank' className='p-3 text-cyan'>{entry.shortLink}</a>
    
                <button onClick={(e) => copyShortLink(e, entry.shortLink)} className='mx-3 py-2 rounded-md mb-4 text-white font-bold bg-cyan'>Copy</button>
            </article>
            ))
        ) : (
            <p className='text-center text-xl text-violet-extraDark'>No History!</p>
        )}
    </section>
  )
}

export default History