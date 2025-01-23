import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import { useContext } from "react";
import { DiaryDispatchContest } from "../App";
import Editor from "../component/Editor";

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
    const {onDelete,onUpdate}=useContext(DiaryDispatchContest)
    const onClickDelete=()=>{
        if(window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")){
            onDelete(id)
            navigate("/",{replace:true})
        }
    }

    //수정 기능
    const onSubmit=(data)=>{
        if(window.confirm("일기를 정말 수정할까요?")){
            const {date,content,emotionId}=data
            onUpdate(id,date,content,emotionId)
            navigate("/",{replace:true})
        }
    }
    
    if(!data){
        return <div>일기를 불러오고 있습니다...</div>
    }else{
        return (
            <div>
                <Header
                    title={"일기 수정하기"}
                    leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
                    rightChild={
                        <Button 
                            type={"negative"} 
                            text={"삭제하기"}
                            onClick={onClickDelete}
                        />
                    }
                />
                <Editor initData={data} onSubmit={onSubmit}/>
            </div>
        )
    }
}
export default Edit;