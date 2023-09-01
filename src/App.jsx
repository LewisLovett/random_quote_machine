import logo from './logo.svg';
import './App.css';

import SocialButton from './component/SocialButton/SocialButton';


function App() {



  return (
    <div>
      <SocialButton backgroundColor={'red'} socialIconName={'tumblr'} altText='Post this quote on tumblr!' socialUrl='https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Alice%20Walker&content=The%20most%20common%20way%20people%20give%20up%20their%20power%20is%20by%20thinking%20they%20don%E2%80%99t%20have%20any.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'/>
      <SocialButton backgroundColor={'blue'} socialIconName={'twitter'} altText='Tweet this quote!' socialUrl='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20most%20common%20way%20people%20give%20up%20their%20power%20is%20by%20thinking%20they%20don%E2%80%99t%20have%20any.%22%20Alice%20Walker'/>
    </div>
      
  );
}

export default App;
