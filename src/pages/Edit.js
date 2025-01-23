import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import { useContext } from "react";
import { DiaryDispatchContest } from "../App";

const Edit=()=>{
    //url 파라미터로 일기 데이터 가져오기
    const {id}=useParams()
    const data=useDiary(id)

    //뒤로 가기
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }

    //삭제 기능
    const {onDelete}=useContext(DiaryDispatchContest)
    
    if(!data){
        return <div>일기를 불러오고 있습니다...</div>
    }else{
        return (
            <div>
                <Header
                    title={"일기 수정하기"}
                    leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
                    rightChild={<Button type={"negative"} text={"삭제하기"} />}
                />
            </div>
        )
    }
}
export default Edit;