import "./SocialButton.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'
  


export default function SocialButton({socialIconName, altText, socialUrl,backgroundColor}){
    let socialIcon;
    if(socialIconName==='twitter'){
        socialIcon = faTwitter;
    }else if(socialIconName==='tumblr'){
        socialIcon = faTumblr;
    }
    return(
        <a href={socialUrl}><button className="socialButton" style={{backgroundColor: backgroundColor}} alt={altText}><FontAwesomeIcon icon={socialIcon} /></button></a>
        
        
    )
}