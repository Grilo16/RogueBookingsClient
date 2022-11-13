import { baseURl } from "./repoUrl"

const lessonURL = `${baseURl}/lessons/`

const lessonRepo = {

    async getAllLessons(){
        const response = await fetch(lessonURL)
        return response.json()
    },
    
    async addNewLessonToBusiness(lessonObject, businessId){
        const response = await fetch(lessonURL + `${businessId}/new`, {
            method: "POST",
            body: JSON.stringify(lessonObject),
            headers: { "Content-Type": "application/json" }
        })
        return response.json()
    },
    
    async deleteLessonById(lessonId){
        const response = await fetch(lessonURL + `${lessonId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        return response.json()
    },
    
    async editLessonById(patchObject, lessonId){
        const response = await fetch(lessonURL + `${lessonId}`, {
            method: "PATCH",
            body : JSON.stringify(patchObject),
            headers: { "Content-Type": "application/json" }
        })
        return response.json()
    },
}

export default lessonRepo