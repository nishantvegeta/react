import Header from "./Header"
import Footer from "./footer"
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";


function App() {
    
    return (
        <>
            <Header/>
            <Food/>
            <Footer/>
            <Card/>
            <Button/>
            <Student name='spongebob' age={100} isStudent={true}/>
            <Student name='patrick' age={99} isStudent={false}/>
            <Student name='alpha' age={79} isStudent={false}/>
            <Student name='sandy' age={89} isStudent={false}/>
            <Student />
        </>
    );
}

export default App
