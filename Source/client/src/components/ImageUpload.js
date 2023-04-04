import React, { useEffect, useRef } from 'react';

const ImageUpload = () => {

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dzooewr3a',
      uploadPreset: 'kcjt9zeq'
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        console.log("Image uploaded:", result.info)
      }
  });

  }, [])
  return (
  <>
    <button onClick={() => {widgetRef.current.open()}}>Upload</button>
  </>
  )
  ;
}

export default ImageUpload;