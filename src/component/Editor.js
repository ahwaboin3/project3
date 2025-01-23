import { useCallback, useEffect, useState } from "react"
import "./Editor.css"
import { emotionList, getFormattedDate } from "../util"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import EmotionItem from "./EmotionItem"

const Editor=({initData, onSubmit})=>{
    const navigate=useNavigate()
    const [state,setState]=useState({
        date:getFormattedDate(new Date()),
        emotionId:3,
        content:"",
    })
    useEffect(()=>{
        if(initData){
            setState({
                ...initData,
                date:getFormattedDate(new Date(parseInt(initData.date)))
            })
        }
    },[initData])
    const handleChangeDate=(e)=>{
        setState({
            ...state,
            date:e.target.value,
        })
    }
    const handleChangeContent = (e) => {
        setState({
          ...state,
          content: e.target.value,
        });
    };
    const handleSubmit=()=>{
        onSubmit(state)
    }
    const hadleOnGoBack=()=>{
        navigate(-1)
    }
    const handleChangeEmotion=useCallback((emotionId)=>{
            setState((state)=>({
                ...state,
                emotionId,
            }))
        },[])
    return(
        <div className="editor">
            <div className="editor-section">
                <h4>오늘의 날짜</h4>
                <div className="input-wrapper">
                    <input type="date" value={state.date}
                        onChange={handleChangeDate} />
                </div>
            </div>
            <div className="editor-section">
                <h4>오늘의 감정</h4>
                <div className="input-wrapper emotion-list-wrapper">
                    {emotionList.map((it)=>
                        <EmotionItem
                            key={it.id}
                            {...it}
                            onClick={handleChangeEmotion}
                            isSelected={state.emotionId===it.id}
                        />
                    )}
                </div>
            </div>
            <div className="editor-section">
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea
                        placeholder="오늘은 어땠나요?"
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className="editor-section buttom_section">
                <Button text={"취소하기"} onClick={hadleOnGoBack}/>
                <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit}/>
            </div>
        </div>
    )
}
export default Editor