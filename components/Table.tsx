import Option from "@/public/SVG/option.svg";
import OptionActive from "@/public/SVG/option-filled.svg";
import Image from "next/image";
import { ReactNode } from "react";
import { hash } from "crypto";

export default function Table ({content, className, bodyClassName, headClassName, rowClassName, cellClassName, cellWidth, hasHeader=false, hasColumn=false } : { content : any[][], className?: string, rowClassName?: string, cellClassName?: string,  bodyClassName?: string,  headClassName?: string, cellWidth?: number, hasHeader?: Boolean, hasColumn?: Boolean}) {
    var i = 0;
    var header : any[] = [];
    var width = content[0].length;
    var height = content.length;
    if (hasHeader) content.splice(1, 0, header);
    return (<table className={"table-" + width + "x" + height + " " + className}>{hasHeader ? <thead className={headClassName}><tr>{content[0].reduce((acc, cur) => {
        acc.push(<td key={Math.random()}>{typeof(cur) == "number" || typeof(cur) == "string" ? <span>{cur}</span> : cur}</td>, <td key={Math.random()} className="table-spacer"><div key={Math.random()} className="table-spacer-line first last"/></td>);
        return acc; 
    }, []).slice(0, -1)}
        </tr></thead> : undefined}<tbody className={bodyClassName}>
    {content.map(row => {
        if (row == header) {
            return <tr key={Math.random()} className="table-spacer-horizontal">{
                Array.from(Array(width*2-1)).map(_ => <td key={Math.random()} className="table-spacer-horizontal-cell"><div className="table-spacer-horizontal-line"></div></td>)
            }</tr>
        }
        var j = 0;
        return (i++ == 0) && hasHeader ? undefined : <tr key={Math.random()} className={rowClassName}>{row.reduce((acc, cur) => {
            acc.push(<td width={cellWidth ? cellWidth + "px" : ""} key={Math.random()} className={cellClassName + (hasColumn && (j++ == 0) ? " first" : "")}>{typeof(cur) == "number" || typeof(cur) == "string" ? <span>{cur}</span> : cur}</td>, <td className="table-spacer"><div className={"table-spacer-line " + i + " " + (i == (1 + Number(hasHeader)) ? "first" : (i == height ? "last" : ""))}/></td>);
            return acc; 
        }, []).slice(0, -1)}</tr>}
    )}
</tbody></table>);
}