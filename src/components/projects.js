import React from 'react';
import {Card, CardDeck} from 'react-bootstrap'
import CodeQuiz from '../../public/assets/images/codequizOne.png'
import FitnessTrack from '../../public/assets/images/FitnessTrackHome.png'
import NoteTrack from '../../public/assets/images/introNoteTracker4.png'
import Weather from '../../public/assets/images/Weatherdash1.png'
import { FaGithub } from "react-icons/fa";
import { GrHeroku } from "react-icons/gr";


function Portfolio(){
    return (
        <div>
            <CardDeck className="justify-content-x-center" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Card className="bg-dark text-white text-center" style={{flex: 1, width:'100%'}}>
            <Card.Img src={CodeQuiz} alt="Code quiz screen shot" />
            <Card.ImgOverlay>
                <Card.Title><h3>Code Quiz</h3></Card.Title>
                <Card.Text>
                    <a href="https://github.com/whatawhat/codequiz" target="_blank">
                        <FaGithub size="2em" color="#343a40"/>
                    </a>
                    <a href="https://whatawhat.github.io/codequiz/" target="_blank">
                        <GrHeroku size="2em" color="#343a40"/>
                    </a>
                </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white text-center" style={{flex: 1, width:'100%'}}>
            <Card.Img src={FitnessTrack}  alt="Fitness tracker screenshot" style={{height:'435px'}} />
            <Card.ImgOverlay>
                <Card.Title><h3>Fitness Tracker</h3></Card.Title>
                <Card.Text>
                    <a href="https://github.com/whatawhat/workout_tracker" target="_blank">
                        <FaGithub size="2em" color="white"/>
                    </a>
                    <a href="https://aqueous-beyond-78787.herokuapp.com/" target="_blank">
                        <GrHeroku size="2em" color="white"/>
                    </a>
                </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white text-center" style={{flex: 1, width:'100%'}}>
            <Card.Img src={NoteTrack} alt="Note tracker screenshot" />
            <Card.ImgOverlay>
                <Card.Title><h3>Note Tracker</h3></Card.Title>
                <Card.Text>
                    <a href="https://github.com/whatawhat/note_taker" target="_blank">
                        <FaGithub size="2em" color="#343a40"/>
                    </a>
                    <a href="https://peaceful-bayou-22212.herokuapp.com/" target="_blank">
                        <GrHeroku size="2em" color="#343a40"/>
                    </a>
                </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white text-center" style={{flex: 1, width:'100%'}}>
            <Card.Img src={Weather} alt="Weather dashboard screenshot" />
            <Card.ImgOverlay>
                <Card.Title><h3>Weather Dashboard</h3></Card.Title>
                <Card.Text>
                    <a href="https://github.com/whatawhat/weather_dashboard" target="_blank">
                        <FaGithub size="2em" color="#343a40"/>
                    </a>
                    <a href="https://whatawhat.github.io/weather_dashboard/" target="_blank">
                        <GrHeroku size="2em" color="#343a40"/>
                    </a>
                </Card.Text>
                </Card.ImgOverlay>
            </Card>
            </CardDeck>
        </div>
        
    )
}
export default Portfolio;


