import './QuoteBlock.scss'

export default function QuoteBlock({quote,quoteAuthor}){

    return(
        <div className="quoteBlock">
            <div className="quoteBlock__quote">"{quote}</div>
            <div className="quoteBlock__author">{quoteAuthor}</div>
        </div>
    )
}