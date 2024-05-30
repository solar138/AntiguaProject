import Option from "@/public/SVG/option.svg";
import OptionActive from "@/public/SVG/option-filled.svg";
import Image from "next/image";

export default function SimpleOption({name, label} : {name : string, label : any}) 
{
    return
    <label className="option-input">
        <input className="option-button" style={{width: 0, height: 0}} type="radio" name={name}/>
        <Image className="option-button-icon empty" src={Option} alt={label}/>
        <Image className="option-button-icon filled" src={OptionActive} alt={label}/>
        <span className="option-button-spacer"></span>
        <span className="option-button-label">{label}</span>
    </label>;
}