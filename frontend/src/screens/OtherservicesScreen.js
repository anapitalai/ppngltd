import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button,Image } from 'react-bootstrap'



const OtherservicesScreen = () => {
    return (
        <>
            <h1>Other Services</h1>
            <div>
            <Image id="" src='01.webp'  srcSet='hotel_500.webp 500w,
            hotel_300.webp 300w' rounded responsive fluid alt="Logo" />

                <p>Our sister company Obsidian Conveyancing can assist
                    you with all the real estate Conveyancing needs
                    in PNG. Transferring property ownership from one
                    party to another can be a complicated process however
                    our team is able to assist and guide you through the
                    process in a friendly, fast and efficient manner. We are
                    an experienced real estate Conveyancor who assist with
                    a range of issues related to property, including updating
                    of titles, title searches and title replacements.</p>

                <p> The team will make conveyancing processing as easy as
                    possible.If you have and questionsor would like  a quotes
                    please reach out to us via email <email>support@obsidianconveyancing.com</email> or
                    by calling us directly on  <a href="tel:+675 341 6367">+675 341 6367</a></p>
                {/* <a href="mailto: email@example.com"> Click here to send me an email</a> <br /> */}

                <LinkContainer to='/obsidian-email'>
                    <Button variant='outline-danger'>Email Us @ support@obsidianconveyancing.com</Button>
                </LinkContainer>

            </div>
        </>
    )
}

export default OtherservicesScreen
