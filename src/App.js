import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Intro from './component/Intro';
import Rules from './component/Rules';
import Criteria from './component/Criteria';
import Faq from './component/Faq';
import Timeline from './component/Timeline';
import Prizes from './component/Prizes';
import Sponsors from './component/Sponsors';
import Policy from './component/Policy';
import Footer from './component/Footer';



function App() {
  return (
    <div>
      <Navbar/> 
      <Header/>
      <Intro/>
      <Rules/>
      <Criteria/>
      <Faq/>
      <Timeline/>
      <Prizes/>
      <Sponsors/>
      <Policy/>
      <Footer/>
    </div>
  );
}

export default App;
