import React from 'react'
import { Image } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'


const VaccantlandScreen = () => {
    return (
        <>
            <div id='bg-yellow' className='fix-pad'>
                <h1>Vacant Land Valuation</h1>

                <p align="justify">
                    Property PNG valuers can assist you with vacant land (be it residential, industrial or commercial) valuation in
                    PNG. We can provide feasibility assessments of property development using hypothetical analysis.
                    We also provide "on completion" valuations for individuals buying a house and land package for mortgage
                    purposes.
                </p>
            </div>
            <Fade right cascade>

            <figure className='position-relative'>

                <Image id="images" src='land/land_crop.webp' srcSet='land/land_crop_1000.webp 1000w,land/land_crop_500.webp 500w,
            land/land_crop_300.webp 300w' rounded responsive fluid alt="Logo" />
            
                <figcaption id='bg-yellow'>
                    Vacant Land Valuation
                </figcaption>
            </figure>
            </Fade>


        </>
    )

}

export default VaccantlandScreen
