import React from 'react'

const Shortener = ({link, setLink, shortenLink, fetchError}) => {

  return (
    <form className='-mt-32 flex flex-col p-6 gap-4 bg-violet-dark bg-[url("./assets/bg-shorten-mobile.svg")] bg-no-repeat bg-right-top rounded-lg sm:p-10 lg:max-w-[1075px] lg:mx-auto lg:bg-[url("./assets/bg-shorten-desktop.svg")] lg:bg-center lg:bg-cover lg:grid lg:grid-cols-12 lg:justify-stretch lg:p-14' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="link" className='absolute -left-[10000px]'>Shorten a link here...</label>
        <input 
            type="text" 
            className={!fetchError ? `p-3 rounded-md text-violet-extraDark placeholder:text-violet-gray sm:text-lg lg:grow lg:px-8 lg:py-4 lg:text-xl lg:col-span-9` : `p-3 rounded-md text-violet-extraDark placeholder:text-red-300 outline outline-4 outline-red-400 sm:text-lg lg:grow lg:px-8 lg:py-4 lg:text-xl lg:col-span-9`} 
            placeholder='Shorten a link here...'
            value={link} 
            onChange={(e) => setLink(e.target.value)}
        />
        <em className='hidden peer-invalid:block text-red-400 text-xs -mt-1 sm:text-sm lg:order-1 lg:col-span-7' style={fetchError ? {display: "block"} : {display: "none"}}>{fetchError}</em>

        <button type="submit" onClick={shortenLink} className='bg-cyan p-2 text-white text-lg font-bold rounded-md hover:bg-brightCyan sm:text-xl lg:px-10 lg:col-span-3'>Shorten It!</button>
    </form>
  )
}

export default Shortener