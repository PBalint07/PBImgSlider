import { useState } from 'react'
import './App.css'
import { imagesArr } from './data'
import { Header } from './components/Header'
import { Photo } from './components/Photo';
import { Controls } from './components/Controls';

function App() {
  const [images] = useState(imagesArr)
  const [currentIndex, setCurrentIndex] = useState(0);

  return(
    <div className='flex flex-col items-center max-w-5xl mx-auto p-4 bg-teal-100 rounded-xl shadow-lg'>
      <Header currentIndex={currentIndex}/>
      <Photo currentIndex={currentIndex} images={images}/>
      <Controls setCurrentIndex={setCurrentIndex} maxL={images.length}/>
    </div>
  )
}

export default App
