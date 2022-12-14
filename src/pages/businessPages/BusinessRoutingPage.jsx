import { useContext } from "react";
import styled from "styled-components";
import ErrorPage from "../ErrorPage";
import DefaultPage from "../../components/defaultPageComponents/DefaultPage";
import MiniMenu from "../../components/defaultPageComponents/miniMenuComponents/MiniMenu";
import { MasterContext } from "../../containers/MasterContainer";
import RevenuePage from "./SubPages/miniMenuTabs/RevenuePage";
import SchedulePage from "./SubPages/miniMenuTabs/SchedulePage";
import SettingsPage from "./SubPages/miniMenuTabs/SettingsPage";
import StudentsPage from "./SubPages/miniMenuTabs/StudentsPage";
import TeachersPage from "./SubPages/miniMenuTabs/TeachersPage";
import MembersPage from "./SubPages/miniMenuTabs/MembersPage";
import SessionsPage from "./SubPages/miniMenuTabs/SessionsPage";

const BusinessRoutingPage = () => {

    const {state, dispatch} = useContext(MasterContext)

    return (
        <>
            {
                state.selectedPage === "Schedule"
                ? <SchedulePage/>
                : state.selectedPage === "Teachers"
                ? <TeachersPage/>
                : state.selectedPage === "Students"
                ?<StudentsPage/>
                : state.selectedPage === "Revenue"
                ?<RevenuePage/>
                : state.selectedPage === "Settings"
                ? <SettingsPage/>
                : state.selectedPage === "Members"
                ? <MembersPage/>
                : state.selectedPage === "Sessions"
                ? <SessionsPage/>
                :<ErrorPage/>
            }
        </>

        )
};


export default BusinessRoutingPage;


