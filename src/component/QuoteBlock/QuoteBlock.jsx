import './QuoteBlock.scss'

export default function QuoteBlock({quote,primaryColor}){

    return(
        <div  className="quoteBlock">
            <div  className="quoteBlock__quote" style={{color:primaryColor}}><span className="quoteBlock__speechMark">"</span>{quote.quoteText}</div>
            <div  className="quoteBlock__author" style={{color:primaryColor}}>-{quote.author}</div>
        </div>
    )
}