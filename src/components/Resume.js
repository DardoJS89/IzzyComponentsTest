import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <aside id="resume">
                <a href="#"> Stuff
                </a>
                <h1>Resume</h1>
                <header>
                    <h2> This Student </h2>
                    <div >
                        <a href="tel:3051234321">(305) 123-4321</a>
                        <a href="mailto:israel@wyncode.co">israel@wyncode.co</a>
                        <a href="https://izzycode.co" rel="nofollow">http://izzycode.co</a>
                        <p> " Happy Street 1919 "

                         "Miami, Florida  ""

                         "      USA      "
                         </p>
                    </div>

                </header>

                <ol>
                    <li>
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>Languages: HTML, CSS, Javascript</li>
                            <li>Languages: HTML, CSS, Javascript</li>
                            <li>Languages: HTML, CSS, Javascript</li>
                        </ul>
                        <p>
                            A lot of ReactJs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id animi quidem obcaecati quisquam ullam. Quos aperiam ipsum cupiditate hic cum quaerat aut qui sapiente repudiandae, sed accusantium perspiciatis, molestias.
                     </p>
                    </li>
                    <li>
                        <h3>Experience</h3>
                        <ul>
                            <li>
                                <h4>"The One Place - "
                                 <h7> 2000-2010</h7>
                                </h4>
                                <ul>
                                    <li> I did This</li>
                                    <li> I did That</li>
                                </ul>
                            </li>
                            <li>
                                <h4> "The Other Place - "
                                 <h7> 2000-2010 </h7>
                                </h4>
                                <ul>
                                    <li> I did this</li>
                                    <li> I did that</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>

            </aside >

        )
    }
}
