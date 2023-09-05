import './QuoteBlock.scss'

export default function QuoteBlock({quoteOpacity, quote, primaryColor}){

    return(
        <div style={{opacity:quoteOpacity}}  className="quoteBlock">
            <div  className="quoteBlock__quote" style={{color:primaryColor}}><span className="quoteBlock__speechMark">"</span><span className="quoteBlock__quoteText">{quote.quoteText}</span></div>
            <div  className="quoteBlock__author" style={{color:primaryColor}}>-{quote.author}</div>
        </div>
    )
}