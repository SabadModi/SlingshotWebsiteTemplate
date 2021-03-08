import React from 'react'
import './Checklist.css';

function Checklist() {
    return (
        <div className="container mb-72">
            <div className="teach-checklist flex align justify-evenly">
                <img src="clip-start-up.png" className="checklist-img"></img>

                <div className="checklist">
                    <h1 className="text-5xl text-white">What you'll learn from *Company*</h1>
                    <div className="chk">
                        <div className="chk-1">
                            <div className="checklist-div">
                                <img src="https://img.icons8.com/plasticine/100/000000/checked-2.png" />
                                <p className="text-2xl">Skill 1</p>
                            </div>

                            <div className="checklist-div">
                                <img src="https://img.icons8.com/plasticine/100/000000/checked-2.png" />
                                <p className="text-2xl">Skill 2</p>
                            </div>

                            <div className="checklist-div">
                                <img src="https://img.icons8.com/plasticine/100/000000/checked-2.png" />
                                <p className="text-2xl">Skill 3</p>
                            </div>
                        </div>

                        <div className="chk-2">
                            <div className="checklist-div">
                                <img src="https://img.icons8.com/plasticine/100/000000/checked-2.png" />
                                <p className="text-2xl">Skill 4</p>
                            </div>

                            <div className="checklist-div">
                                <img src="https://img.icons8.com/plasticine/100/000000/checked-2.png" />
                                <p className="text-2xl">Skill 5</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Checklist
