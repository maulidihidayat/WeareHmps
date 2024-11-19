import React from 'react'

interface Component{
    source : string;
}
const YoutubeBanner :React.FC<Component>  = ({source}) => {
  return (
    <div>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src={source}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="border-4 hover:border-b-[10px] rounded-2xl border-secondary"
          ></iframe>
        </div>
    </div>
  )
}

export default YoutubeBanner