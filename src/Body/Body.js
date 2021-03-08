import React, { Component } from 'react';
import Typist from 'react-typist';
// import TypistCycle from 'react-typist-cycle';
import './Body.css';

function Body() {
    return (

        <div className="container">

            <div className="mt-35 w-screen max-w-full flex justify-center align h-screen">
                <img src="city.png" className="w-max" />

                <div>
                    <p className="text-white">
                        <span className="text-5xl">
                            Looking to enhance your CS Journey as a
                        <b>

                                {/* <TypistCycle
                                    content={[
                                        'High Schooler?',
                                        'College Graduate?'
                                    ]}
                                    numberOfCycles={-1} // loop indefinitely
                                    segmentDelay={0.8} // stop for 0.8s at end line
                                    className="typist-1"
                                /> */}

                                <Typist>
                                    <span className="typist-1">High Schooler?</span>
                                    <Typist.Backspace count={14} delay={2000} />
                                    <span className="typist-2">College Graduate?</span>
                                </Typist>
                            </b>
                        </span>

                        <span className="text-3xl">
                            Slingshot Is the Perfect Place for you to
                        <b className="intro-1"> Learn</b>, <b className="intro-2">Interact</b> and <b className="intro-3">Share </b>
                        your Knowledge with <b>Hundred's Of Others</b>, Just Like You
                    </span>
                    </p>
                    <br />
                    <button type="submit" className="text-2xl apply-now ">Apply Now!</button>
                </div>

            </div>

            {/* Why <Company Name> */}

            <div className="slingshot">

                {/* Goals */}

                <div className="mt-9 mr-5 slingshot-goals">

                    <div className="float-left">
                        <div className="slingshot-1">
                            <div className="slingshot-1_icon">
                                <img src="https://img.icons8.com/nolan/64/students.png" />
                            </div>
                            <br />
                            <div className="slingshot-1_div">
                                <h1 className="text-lg text-white"><b><u>Goal 1</u></b></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="slingshot-1">
                            <div className="slingshot-1_icon">
                                <img src="https://img.icons8.com/nolan/64/students.png" />
                            </div>
                            <br />
                            <div className="slingshot-1_div">
                                <h1 className="text-lg text-white"><b><u>Goal 2</u></b></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <br /> <br /><br />

                    <div className="float-left">
                        <div className="slingshot-1 sl-2">
                            <div className="slingshot-1_icon">
                                <img src="https://img.icons8.com/nolan/64/students.png" />
                            </div>
                            <br />
                            <div className="slingshot-1_div">
                                <h1 className="text-lg text-white"><b><u>Goal 3</u></b></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="slingshot-1 sl-2">
                            <div className="slingshot-1_icon">
                                <img src="https://img.icons8.com/nolan/64/students.png" />
                            </div>
                            <br />
                            <div className="slingshot-1_div">
                                <h1 className="text-lg text-white"><b><u>Goal 4</u></b></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>


                </div>

                {/* //Goals */}


                {/* Text */}
                <div className="slingshot-text">
                    <h1 className="text-3xl text-white"><b><u>Why *Company Name*</u></b></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Accumsan in nisl nisi scelerisque. Cras sed felis eget velit aliquet sagittis id
                        consectetur. Sed nisi lacus sed viverra tellus. At volutpat diam ut venenatis tellus
                        in metus vulputate eu. Facilisis volutpat est velit egestas. Diam quam nulla porttitor
                        massa. Morbi tristique senectus et netus et malesuada fames ac. Leo a diam
                        sollicitudin tempor id eu. Ultrices eros in cursus turpis massa tincidunt dui ut ornare.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Body
