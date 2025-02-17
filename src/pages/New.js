import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor"
import { useContext } from "react";
import { DiaryDispatchContest } from "../App";

const New=()=>{
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }

    //작성 완료 기능
    const {onCreate}=useContext(DiaryDispatchContest)
    const onSubmit=(data)=>{
        const {date,content,emotionId}=data
        onCreate(date,content,emotionId)
        navigate("/",{replace:true})
    }

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}

export default New;
