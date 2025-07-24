import React from 'react'
import sidhu1 from '../../assets/sidhu.png';
export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                       <img className="w-96 rounded-lg" src={sidhu1} alt="sidhu" />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Welcome to the site of upcoming new wave of punjabi music
                      </h2>
                      <p className="mt-6 text-gray-600">
                         <b>Music in India is deeply rooted in tradition, with classical forms 
                            like Hindustani and Carnatic coexisting alongside vibrant regional 
                            folk styles. Bollywood music dominates the mainstream, blending melodies with 
                            storytelling and dance. In recent years, the independent music scene has grown rapidly, 
                            with artists exploring genres like pop, hip-hop, and electronic. Punjabi music, in particular, 
                            has witnessed explosive growth, with singers like Karan Aujla gaining international recognition for their lyrical talent and unique style. 
                            The late Sidhu Moosewala played a monumental role in bringing Punjabi music to the global stage, leaving behind a legacy that continues to inspire millions. 
                            Platforms like NH7 Weekender and Coke Studio have further showcased India’s diverse musical talent worldwide.
                      </b>
                      </p>
                      <p className="mt-4 text-gray-600">
                        <strong> Concert culture in India is rapidly growing, with more fans attending live shows and festivals than ever before. 
                         Punjabi artists like Karan Aujla and the late Sidhu Moosewala have boosted this trend, making regional music a major crowd-puller.
                          With rising demand, concerts are set to become bigger and more immersive in the future.
                     </strong>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}