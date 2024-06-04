import './App.css'
import Header from "./components/commonComponents/Header";
import MainSection from "./components/sectionone/MainSection";
import SecondTwo from "./components/sectionTwo/SecondTwo";
import SectionThird from "./components/sectionThird/SectionThird";
import SectionFourth from "./components/sectionfourth/SectionFourth";
import SectionFifth from "./components/sectionFifth/SectionFifth";
import Newsletter from "./components/sectionSixth/Newsletter";
import Footer from "./components/commonComponents/Footer";


function App() {
  return (
    <div className="App">
       <Header/>
       <MainSection/>
       <SecondTwo/>
       <SectionThird/>
       <SectionFourth/>
       <SectionFifth/>
       <Newsletter/>
       <Footer/>
    </div>
  );
}

export default App;
