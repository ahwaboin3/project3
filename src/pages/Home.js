import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";

const Home=()=>{
    return (
        <div>
            <Button
                text={"긍정 버튼"}
                onClick={()=>{
                    alert("default")
                }}
            />
            <Button
                text={"긍정 버튼"}
                type="positive"
                onClick={()=>{
                    alert("positive")
                }}
            />
            <Button
                text={"부정 버튼"}
                type="negative"
                onClick={()=>{
                    alert("negative")
                }}
            />
        </div>
    )
}
export default Home;