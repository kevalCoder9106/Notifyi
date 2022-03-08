import './Home.css'

const Home = () => {
    return(
        <div className='home-container background'>
            <header className='header'>
                <h2 className='font-cursive'>Notifyi</h2>
                <h4><a href='#0' className='link font-mono'>Sign out</a></h4>
            </header>
            <div className='home-field-container'>
                <input type='text' placeholder='Title'></input>
                <button>Create</button>
            </div>
            <div className='page-container'>
                
            </div>
        </div>
    )
}

export default Home