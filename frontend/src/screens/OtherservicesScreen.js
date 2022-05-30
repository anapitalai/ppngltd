import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'



const OtherservicesScreen = () => {
    return (
        <>
            <h1>Other Services</h1>
            <div>
                <img id="" src="https://media.istockphoto.com/photos/aerial-view-of-residential-distratic-at-major-mackenzie-dr-and-ave-picture-id1320991884?b=1&k=20&m=1320991884&s=170667a&w=0&h=N79xaO8j11u7tRWG7RCy8ksCkdTgujeFLFpXR_guaa0=" rounded responsive fluid alt="Logo" />

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
                    by calling us directly on  <a href="tel:+675 731 349 91">+675 73134991</a></p>
                {/* <a href="mailto: email@example.com"> Click here to send me an email</a> <br /> */}

                <LinkContainer to='/obsidian-email'>
                    <Button variant='outline-danger'>Email Us @ support@obsidianconveyancing.com</Button>
                </LinkContainer>

            </div>
        </>
    )
}

export default OtherservicesScreen
