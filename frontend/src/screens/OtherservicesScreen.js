import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Image } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'




const OtherservicesScreen = () => {
    return (
        <>


            <Fade right cascade>
                <figure className='position-relative'>
                    <Image id='images' src='bg_crop.webp' srcSet='bg_crop_1000.webp 1000w,
            bg_crop_500.webp  500w, bg_crop_300.webp 300w' rounded responsive fluid alt="Logo" />
                    <figcaption id='bg-yellow'>
                        Other Services
                    </figcaption>
                </figure>
            </Fade>
            <div id='bg-yellow' className='fix-pad'>
                <h1>Conveyancing</h1>
                <div>

                    <p align="justify">Our sister company Obsidian Conveyancing can assist
                        you with all the real estate Conveyancing needs
                        in PNG. Transferring property ownership from one
                        party to another can be a complicated process however
                        our team is able to assist and guide you through the
                        process in a friendly, fast and efficient manner. We are
                        experienced real estate conveyancers who can assist with
                        a range of issues related to property, including updating
                        of titles, title searches and title replacements.</p>

                    <p align="justify"> The team will make conveyancing processing as easy as
                        possible. If you have any questions or would like a quote,
                        please reach out to us via email <email>support@obsidianconveyancing.com</email> or
                        by calling us directly on  <a href="tel:+675 341 6367">+675 341 6367</a></p>
                </div>

            </div>

            <LinkContainer to='/obsidian-email'>
                <Button variant='outline-danger'>Email Us @ support@obsidianconveyancing.com</Button>
            </LinkContainer>

        </>
    )
}

export default OtherservicesScreen
