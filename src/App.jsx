import logo from './logo.svg';
import './App.scss';

import SocialButton from './component/SocialButton/SocialButton';
import { useEffect, useState } from 'react';
import QuoteBlock from './component/QuoteBlock/QuoteBlock';


function App() {

  
  const [primaryColor, setPrimaryColor] =useState('#16a085')
  const [quote, setQuote] =useState('The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.')
  const [quoteAuthor, setQuoteAuthor] =useState('Jesse Owens')
  document.body.style.backgroundColor = primaryColor;

  useEffect(() =>{
    document.body.style.backgroundColor = {primaryColor}
  },[primaryColor])


  return (
    <div className="wrapper">
      <QuoteBlock quote={quote} quoteAuthor ={quoteAuthor} primaryColor={primaryColor} />
      <SocialButton backgroundColor={primaryColor} socialIconName={'tumblr'} altText='Post this quote on tumblr!' socialUrl='https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Alice%20Walker&content=The%20most%20common%20way%20people%20give%20up%20their%20power%20is%20by%20thinking%20they%20don%E2%80%99t%20have%20any.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'/>
      <SocialButton backgroundColor={primaryColor} socialIconName={'twitter'} altText='Tweet this quote!' socialUrl='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20most%20common%20way%20people%20give%20up%20their%20power%20is%20by%20thinking%20they%20don%E2%80%99t%20have%20any.%22%20Alice%20Walker'/>
      <button style={{backgroundColor:primaryColor}} className='wrapper__quoteButton' >New quote</button>
    </div>
      
  );
}

export default App;
