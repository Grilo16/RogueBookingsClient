import { useContext } from "react";
import AddSessionForm from "../../../../components/forms/AddSessionForm";
import TableComponent from "../../../../components/tableComponents/TableComponent";
import { ContentDiv, MasterContext } from "../../../../containers/MasterContainer";

const SessionsPage = () => {

    const {state, dispatch} = useContext(MasterContext)
    let lessons = []
    if(state.selectedBusiness.lessons.length > 0){
         lessons = state.selectedBusiness.lessons.map((lesson)=>{
            const {id, name, description, capacity, date, price} = lesson
            const lessonObj = {id, name, description, capacity, date, price}
            return lessonObj

         })

    }

    return (
        <ContentDiv>
            <AddSessionForm/>
            {
            state.selectedBusiness.lessons.length > 0
            ?<TableComponent tableData={lessons} headings={true}/>
            :null
            }
        
        </ContentDiv>
    )
};

export default SessionsPage