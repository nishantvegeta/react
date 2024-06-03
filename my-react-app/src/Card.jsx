import profilePic from './assets/prof.jpg'


function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile"></img>
            <h2 className='card-title'>Nishant</h2>
            <p className='card-text'>I am a Youtuber</p>
        </div>
    );

}

export default Card