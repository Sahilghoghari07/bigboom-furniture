import React, { useEffect, useState } from 'react'
import { AiOutlineFullscreenExit } from 'react-icons/ai';
import { CgRatio } from 'react-icons/cg';

function Topbar() {

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  // Sync state if user exits fullscreen using ESC
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  return (
    <header className='fixed top-0 w-full z-1 bg-black flex justify-between py-1 px-8'>
      <h1 className='text-3xl font-bold text-orange-500'>Admin Dashboard</h1>
      <button
        onClick={toggleFullScreen}
        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        className='cursor-pointer text-2xl rounded-full p-2 bg-orange-500 hover:bg-orange-400 hover:scale-95 transition-all'
      >
        {isFullscreen ? <AiOutlineFullscreenExit /> : <CgRatio />}
      </button>
    </header>
  )
}

export default Topbar