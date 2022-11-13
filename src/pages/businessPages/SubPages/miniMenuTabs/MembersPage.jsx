import { useContext } from "react";
import { useReducer } from "react";
import ButtonComponent from "../../../../components/formComponents/ButtonComponent";
import TableComponent from "../../../../components/tableComponents/TableComponent";
import {
  ContentDiv,
  MasterContext,
} from "../../../../containers/MasterContainer";
import teacherRepo from "../../../../repositories/teacherRepo";

const MembersPage = () => {

    const { state, dispatch } = useContext(MasterContext);

  const handleHireTeacher = (selectedId) => {


    console.log(selectedId)
  };

  let members = [];
  if (state.selectedBusiness.members[0]) {
    members = state.selectedBusiness.members.map((obj) => {
      const { id, firstName, lastName, rest } = obj.user;
      const newObj = {
        firstName,
        lastName,
        hire: (
          <ButtonComponent
            label={"id"}
            newColor={"#ffcf7e"}
            height={"50%"}
            width={"min-content"}
            clickFunction={handleHireTeacher}
            target={id}
          />
        ),
      };
      return newObj;
    });
  }

  console.log(state.selectedBusiness.members);
  return (
    <ContentDiv>
        {
        state.selectedBusiness.members.length > 0
        ? <TableComponent
        tableData={members}
        headings={true}
      />
        : null
        }
          </ContentDiv>
  );
};

export default MembersPage;
