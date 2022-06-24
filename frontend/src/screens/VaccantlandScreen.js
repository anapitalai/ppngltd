import React from 'react'
import { Image } from 'react-bootstrap'

const VaccantlandScreen = () => {
    return (
        <>
            <div id='bg-yellow'>
                <h1>Vaccant Land</h1>

                <p>
                    Property PNG valuers can assist you with vacant land (be it residential, industrial or commercial) valuation in
                    PNG. We can provide Feasibility Assessments of property development using Hypothetical Analysis.
                    We also provide “On Completion” valuations for individuals buying a house and land package for Mortgage
                    Purposes.
                </p>
            </div>
            <figure className='position-relative'>

                <Image id="images" src='land/land_crop.webp' srcSet='land/land_crop_1000.webp 1000w,land/land_crop_500.webp 500w,
            land/land_crop_300.webp 300w' rounded responsive fluid alt="Logo" />
                <figcaption id='bg-yellow'>
                    Vacant Land Valuation
                </figcaption>
            </figure>


        </>
    )

}

export default VaccantlandScreen
