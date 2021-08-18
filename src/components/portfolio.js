import React from 'react';
import {Card, CardDeck} from 'react-bootstrap'
import CodeQuiz from '../assets/images/codequizOne.png'
import FitnessTrack from '../assets/images/FitnessTrackHome.png'
import NoteTrack from '../assets/images/introNoteTracker4.png'
import Weather from '../assets/images/Weatherdash1.png'
//import { FaGithub } from "react-icons/fa";
//import { GrHeroku } from "react-icons/gr";



function Portfolio(){
    return (
        <div>

            <CardDeck className="justify-content-x-center" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Card className="bg-dark text-white text-center" style={{flex: 2, width:'100%'}}>
                <Card.Header>Code Quiz</Card.Header>
                <Card.Img src={CodeQuiz} alt="Note tracker screenshot" />
                <Card.Footer>
                    <a href="https://github.com/whatawhat/codequiz" class="btn btn-sm btn-info" target="_blank" rel="noreferrer" role="button">GitHub Link</a>
                    <a href="https://whatawhat.github.io/codequiz/" class="btn btn-sm btn-info" role="button">Repo Link</a>
                </Card.Footer>
            </Card>
            <Card className="bg-dark text-white text-center" style={{flex: 2, width:'100%'}}>
                <Card.Header>Fitness Tracker</Card.Header>
                <Card.Img src={FitnessTrack} alt="Weather dashboard screenshot" />
                <Card.Footer>
                    <a href="https://github.com/whatawhat/workout_tracker" class="btn btn-sm btn-info" target="_blank" rel="noreferrer">GitHub Link</a>
                       
                    <a href="https://aqueous-beyond-78787.herokuapp.com/" class="btn btn-sm btn-info" target="_blank" rel="noreferrer">Repo Link</a>
                </Card.Footer>
            </Card>
            </CardDeck>


            <CardDeck className="justify-content-x-center p-4" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <Card className="bg-dark text-white text-center" style={{flex: 2, width:'100%'}}>
                <Card.Header>Note Tracker</Card.Header>
                <Card.Img src={NoteTrack} alt="Note tracker screenshot" />
                <Card.Footer>
                    <a href="https://github.com/whatawhat/workout_tracker" class="btn btn-sm btn-info" target="_blank" rel="noreferrer" role="button">GitHub Link</a>
                    <a href="https://aqueous-beyond-78787.herokuapp.com/" class="btn btn-sm btn-info" role="button">Repo Link</a>
                </Card.Footer>
            </Card>
            <Card className="bg-dark text-white text-center" style={{flex: 2, width:'100%'}}>
                <Card.Header>Weather Dashboard</Card.Header>
                <Card.Img src={Weather} alt="Weather dashboard screenshot" />
                <Card.Footer>
                    <a href="https://github.com/whatawhat/weather_dashboard" class="btn btn-sm btn-info" target="_blank" rel="noreferrer">GitHub Link</a>
                       
                    <a href="https://whatawhat.github.io/weather_dashboard/" class="btn btn-sm btn-info" target="_blank" rel="noreferrer">Repo Link</a>
                </Card.Footer>
            </Card>
            </CardDeck>
        </div>
        
    )
}
export default Portfolio;


