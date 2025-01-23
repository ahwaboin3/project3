import { memo } from "react"
import "./EmotionItem.css"

const EmotionItem=({id,img,name,onClick,isSelected})=>{
    const hadleOnClick=()=>{
        onClick(id)
    }
    return (
        <div 
            className={[
                "EmotionItem",
                isSelected ? `EmotionItem_on_${id}`:`EmotionItem_off`,
                ].join(" ")} 
            onClick={hadleOnClick}>
            <img alt={`emotion${id}`} src={img} />
            <span>{name}</span>
        </div>
    )
}
export default memo(EmotionItem)