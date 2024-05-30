'use client';

export default ({children, className, href, callback} : {children: any, className?: string, callback?: Function, href?: string}) =>
    <button className={className} onClick={function() {if (callback) {callback()} if (href) {open(href)}}}>
        <div className="button-text">{children}</div>
        <div className="button-fx-container">
            <img className="button-hover left" src="SVG/Asset 5.svg"/>
            <img className="button-hover right" src="SVG/Asset 6.svg"/>
        </div>
        <div className="button-press top"/>
        <div className="button-press bottom"/>
    </button>