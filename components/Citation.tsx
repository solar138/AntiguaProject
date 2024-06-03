export default function Citation({children, source} : {children?: any, source : string}) {
    return <label>
        <input type="checkbox" className="citation-pop"/>
        <span className="citation-icon">&gt;</span>
        <span className="cited-text" title={source}>{children}</span>
        <span className="citation">
            <span>{source}</span>
        </span>
    </label>;
}