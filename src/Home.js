
import { HeroSection } from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import {FeatureProduct} from './components/FeatureProduct';




export const Home = () => {
  const data={
    name:"D'S SHOP",
  };
  return (
    <>
      <HeroSection myData={data}/>
      <FeatureProduct/>
      <Services/>
      <Trusted/>
   
      
    </>
  )
}
;

