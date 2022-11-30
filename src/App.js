import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';


const App = () => {
  return (
    <>
      <SectionWrapper 
      title="Your own store of Nifty NFTs. Start selling and growing."
      description="Buy, Store, Collect NFTs, exchange and earn crypto. Join 25+ million using ProNef Marketplace"
      showBtn
      mockupImg={assets.homeHero }
      banner="banner"
      />
      <SectionWrapper 
      title="Smart User Interface Marketplace"
      description="Experience a buttery UI of Pronef NFT Marketplace. Smooth constant colors of a fluent UI design"
      mockupImg={assets.homeCards }
      reverse
      />      
      <Features /> 
      <SectionWrapper 
      title="Deployment"
      description="Pronef is built using Expo wich runs natively on all users. You can easily get your app on all people hands.  "
      mockupImg={assets.feature }
      reverse
      />
      <SectionWrapper 
      title="Creative way of showcase the store"
      description="The app contains 2 screens. The first screen lists all NFTs while the second one shows  the deatails of a specific NFT"
      mockupImg={assets.mockup }
      banner="banner02"
      />             
      <Download />
      <div className="px-4 py-4 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
        Made with love by {"  "}<span className="bold">Marc J</span> 
        </p>
      </div>
    </>
  );
};

export default App;