const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='Profile'></img>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}


export default Card;