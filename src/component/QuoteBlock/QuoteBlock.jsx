import './QuoteBlock.scss'

export default function QuoteBlock({quote,quoteAuthor,primaryColor}){

    return(
        <div  className="quoteBlock">
            <div  className="quoteBlock__quote" style={{color:primaryColor}}><span className="quoteBlock__speechMark">"</span>{quote}</div>
            <div  className="quoteBlock__author" style={{color:primaryColor}}>-{quoteAuthor}</div>
        </div>
    )
}