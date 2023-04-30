import React from 'react'

const Shortener = ({link, setLink, shortenLink}) => {

  return (
    <form className='-mt-32 flex flex-col p-6 gap-4 bg-violet-dark bg-[url("./assets/bg-shorten-mobile.svg")] bg-no-repeat bg-right-top rounded-lg' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="link" className='absolute -left-[10000px]'>Shorten a link here...</label>
        <input 
            type="text" 
            className='p-3 rounded-md text-violet-extraDark placeholder:text-violet-gray' 
            placeholder='Shorten a link here...'
            value={link} 
            onChange={(e) => setLink(e.target.value)}
        />

        <button type="submit" onClick={shortenLink} className='bg-cyan p-2 text-white text-lg font-bold rounded-md'>Shorten It!</button>
    </form>
  )
}

export default Shortener