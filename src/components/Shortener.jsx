import React from 'react'

const Shortener = ({link, setLink, shortenLink, fetchError}) => {

  return (
    <form className='-mt-32 flex flex-col p-6 gap-4 bg-violet-dark bg-[url("./assets/bg-shorten-mobile.svg")] bg-no-repeat bg-right-top rounded-lg' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="link" className='absolute -left-[10000px]'>Shorten a link here...</label>
        <input 
            type="text" 
            className={!fetchError ? `p-3 rounded-md text-violet-extraDark placeholder:text-violet-gray` : `p-3 rounded-md text-violet-extraDark placeholder:text-red-300 outline outline-4 outline-red-400`} 
            placeholder='Shorten a link here...'
            value={link} 
            onChange={(e) => setLink(e.target.value)}
        />
        <em className='hidden peer-invalid:block text-red-400 text-xs -mt-1' style={fetchError ? {display: "block"} : {display: "none"}}>{fetchError}</em>

        <button type="submit" onClick={shortenLink} className='bg-cyan p-2 text-white text-lg font-bold rounded-md'>Shorten It!</button>
    </form>
  )
}

export default Shortener