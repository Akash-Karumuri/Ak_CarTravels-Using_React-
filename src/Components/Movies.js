import React from 'react';
import MovieChild from './Movie';
function MovieParent(props){
    return (
        <div className='pt-5 row'>
            <h1>Latest Movies</h1>
        <div className='Movies'>
            <MovieChild className="col-sm-12 col-md-2 col-lg-3 col-xl-4" name="Matka" category="Action/Period/Thriller" image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzIuNUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00403056-azhpuugmpw-portrait.jpg"  />
            <MovieChild className="col-sm-12 col-md-2 col-lg-3 col-xl-4" name="KA" category="Action/Drama/Suspense" image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNTguN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00405181-qsdykqfvqp-portrait.jpg"  />
            <MovieChild className="col-sm-12 col-md-2 col-lg-3 col-xl-4" name="Deavara Part-1" category="Action/Drama/Thriller" image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAzMjUuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310216-mmylckpzun-portrait.jpg"  />
            <MovieChild className="col-sm-12 col-md-2 col-lg-3 col-xl-4" name="Lucky Baskhar" category="Crime/Drama/Thriller" image="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICA3My40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386123-kcmnvggzbg-portrait.jpg"  />
      </div>
    </div>
    );   
}
export default MovieParent