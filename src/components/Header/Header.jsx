import './Header.css';
import reactImg from '../../assets/react-core-concepts.png';

function Header() {
    const keyWord = ['Fundamental', 'Crucial', 'Core'];
    function genRandomInt(num){
        return Math.floor(Math.random() * num);
    }
    const randomNum = genRandomInt(keyWord.length);
    
    return(
        <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {keyWord[randomNum]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
}

export default Header;