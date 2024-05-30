export default ({children, source} : {children?: any, source : string}) =>
    <label>
        <input type="checkbox" className="citation-pop"/>
        <span className="cited-text" title={source}>{children}</span>
        <span className="citation">
            <span>{source}</span>
        </span>
    </label>