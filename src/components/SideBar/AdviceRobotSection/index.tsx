import React from 'react'

function AdviceRobotSection() {
  return (
    <div className='flex flex-col gap-4'>
       <h2>Tavsiye Robotu</h2>
            <select name="Imdb-puan" id="">
              <option value="" selected disabled>
                imdb puan
              </option>
              <option value="imdb-5">5</option>
              <option value="imdb-4">4</option>
              <option value="imdb-3">3</option>
              <option value="imdb-2">2</option>
              <option value="imdb-1">1</option>
            </select>
            <select name="Kategori" id="">
              <option value="" selected disabled>
                kategori
              </option>
              <option value="korku">Korku</option>
              <option value="bilim-kurgu">Bilim Kurgu</option>
              <option value="gizem">Gizem</option>
            </select>
            <select name="Yıl" id="">
              <option value="" selected disabled>
                Yıl
              </option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
            <button className="ml-auto border px-4 py-2 rounded-md">Bul</button>
    </div>
  )
}

export default AdviceRobotSection
