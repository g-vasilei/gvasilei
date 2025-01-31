import { useState, useEffect } from 'react'

const useWindowWidth = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Function to update the width state
    const handleResize = () => setWidth(window.innerWidth)

    // Set the initial width on component mount.
    setWidth(window.innerWidth)

    // Attach event listener for window resize.
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount.
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

export default useWindowWidth
