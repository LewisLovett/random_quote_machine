import logo from './logo.svg';
import './App.scss';

import SocialButton from './component/SocialButton/SocialButton';
import { useCallback, useEffect, useState } from 'react';
import QuoteBlock from './component/QuoteBlock/QuoteBlock';


function App() {

  
  const [primaryColor, setPrimaryColor] =useState('#16a085')
  const [quote, setQuote] =useState({quoteText:'',author:''})
  document.body.style.backgroundColor = primaryColor;

  useEffect(() =>{
    document.body.style.backgroundColor = {primaryColor}
  },[primaryColor])

  useEffect(() => {
     

      const requestOptions ={
        method:'GET',
        headers: {'X-Api-Key':process.env.REACT_APP_QUOTE_API_KEY}
      }
      fetch('https://api.api-ninjas.com/v1/quotes',requestOptions).then((response) => response.json()).then((data)=>{
        
        setQuote({quoteText:data[0].quote,author:data[0].author});
        
      }).catch((err) =>{
        console.log(err.message);
      })
 
  },[])

 


  return (
    <div className="wrapper">
      <QuoteBlock quote={quote} primaryColor={primaryColor} />
      <SocialButton backgroundColor={primaryColor} socialIconName={'tumblr'} altText='Post this quote on tumblr!' socialUrl='https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Alice%20Walker&content=The%20most%20common%20way%20people%20give%20up%20their%20power%20is%20by%20thinking%20they%20don%E2%80%99t%20have%20any.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'/>
      <SocialButton backgroundColor={primaryColor} socialIconName={'twitter'} altText='Tweet this quote!' socialUrl='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20most%20common%20way%20people%20give%20up%20their%20power%20is%20by%20thinking%20they%20don%E2%80%99t%20have%20any.%22%20Alice%20Walker'/>
      <button style={{backgroundColor:primaryColor}} className='wrapper__quoteButton' >New quote</button>
    </div>
      
  );
}

export default App;
