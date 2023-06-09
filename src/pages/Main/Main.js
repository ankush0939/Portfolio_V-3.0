import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Salute, Landing, About, Skills, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>It's Me {headerData.name}</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Services />
            {/* <Testimonials /> 
            <Blog /> */}
            <Contacts />
            <Salute />
        </div>
    )
}

export default Main
