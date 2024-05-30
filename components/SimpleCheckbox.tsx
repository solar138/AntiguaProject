import Toggle from "@/public/SVG/checkbox.svg";
import ToggleActive from "@/public/SVG/checkbox-filled.svg";
import Image from "next/image";

export default function SimpleCheckbox({name, label} : {name : string, label : any})
{
    return <label className="option-input">
        <input className="option-button" style={{width: 0, height: 0}} type="checkbox" name={name}/>
        <Image className="checkbox option-button-icon empty" src={Toggle} alt={label}/>
        <Image className="checkbox option-button-icon filled" src={ToggleActive} alt={label}/>
        <span className="option-button-spacer"></span>
        <span className="option-button-label">{label}</span>
    </label>;
}