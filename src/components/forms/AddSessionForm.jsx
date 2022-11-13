import { useContext } from "react";
import { useState } from "react";
import { MasterContext } from "../../containers/MasterContainer";
import lessonRepo from "../../repositories/lessonRepo";
import ButtonComponent from "../formComponents/ButtonComponent";
import InputFieldComponent from "../formComponents/InputFieldComponent";

const AddSessionForm = () => {

    const {state, dispatch} = useContext(MasterContext)

    const [sessionName, setSessionName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [capacity, setCapacity] = useState("")
    const [price, setPrice] = useState("")

    const handleAddNewSession = (session) => {
        const lessonObj = {
            name: sessionName,
            date: date,
            description: description,
            capacity: capacity,
            price: price, 
        }
        lessonRepo.addNewLessonToBusiness(lessonObj, state.selectedBusiness.id).then(console.log)
    };

    return (
        <form action="">
            <InputFieldComponent placeholder={"Session Name"} setState={setSessionName} state={sessionName}/>
       
            <InputFieldComponent type={"datetime-local"} setState={setDate} state={date} />
            <InputFieldComponent placeholder={"Description"} setState={setDescription} state={description}/>
            <InputFieldComponent type={"number"} placeholder={"Capacity"} setState={setCapacity} state={capacity}/>
            <InputFieldComponent type={"number"} placeholder={"Price"} setState={setPrice} state={price}/>
            <ButtonComponent label={"Add new session"} newColor={"#ffcf7e"} clickFunction={handleAddNewSession}/>
        </form>

    )
}; 

// {
// 	"name": "ducking abouaaataaa",
// 	"date": "2018-12-10T13:49:51.141Z",
// 	"description" : "A very very funn class lesssgooaaoaa",
// 	"capacity" : 69,
// 	"price": 420
// }

export default AddSessionForm;