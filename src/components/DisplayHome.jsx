import React from 'react'
import Navbar from './Navbar'
import { albumsData,songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import Songitem from './Songitem'

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='overflow-auto flex'>
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
            
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
                <div className='overflow-auto flex'>
                    {songsData.map((item, index)=>(<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome