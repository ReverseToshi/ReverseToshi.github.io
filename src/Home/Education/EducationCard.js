function Card({instituteName, degree, period, grade, location}){
    return(
        <div className="card">
            <h3>{degree}</h3>
            <p className="institute-name"><strong>{instituteName}</strong></p>
            <p className="period-location">
                <span className="period">📅 {period}</span>
                <span className="location">📍 {location}</span>
            </p>
            <p className="grade">⭐ Grade: {grade}</p>
        </div>
    )
}

export default Card;