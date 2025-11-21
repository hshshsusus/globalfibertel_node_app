import React from 'react'

function GeoMap() {

    return (
        <div className='my-[20px] flex flex-col gap-7 items-center justify-center'>
            <p className='text-[32px] font-bold'>Office Location</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.75668525763982!2d78.20763496407757!3d17.55009335285664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf3ae20124dcd%3A0x4c9815b1f3de3a8b!2sChota%20bheam%20industries!5e0!3m2!1sen!2sin!4v1763526306063!5m2!1sen!2sin"
                width="500"
                height="350"
                style={{"border":"0;", "borderRadius":"20px"}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" className='map'>
            
            </iframe>
        </div>

    )
}

export default React.memo(GeoMap)