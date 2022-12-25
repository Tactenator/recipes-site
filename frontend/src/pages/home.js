import HomeImg from '../images/home.jpg'

const Home = () => {
    return ( 
        <div id="container">
            <h1>Home</h1>
            <div className='home-image'>
                <img src={HomeImg} alt="Home "></img>
            </div>
        </div>
     );
}
 
export default Home;