import {useContext, useState} from "react";
import {Question, QuestionsGroup} from "../model/Survey/SurveyModel";
import {FormContext} from "../context/FormContext";
import {getYearsOld} from "../utils/GeneralUtils";
import {getOccupations} from "./Occupations";
import {getHobbies} from "./Hobbies";
import {getStudyAreas} from "./StudyAreas";

/**
 *
 * Este hook recibe como props las preguntas
 * y devuelve las mismas preguntas con o sin modificaciones
 *
 * el metodo de applyFormValidations debe ser el contenedor para las validaciones
 * la primera validación que agregue es la de si es mayor de edad quitar
 * la pregunta de datos electorales, el callback sirve para cambiar de pregunta hasta modificar
 * el array de preguntas
 *
 * **/
export const useValidationHook = (questionsProps: Array<QuestionsGroup>) => {

    const { formResponses, setFormResponses } = useContext(FormContext)
    const [questions, setQuestions] = useState(questionsProps)

    const applyFormValidations = (currentGroup: QuestionsGroup, callback?: () => void) => {
        console.log("Validate....")

        if(currentGroup.questions.find( f => f.id === "birthday_question" ) !== undefined){
            handleDateQuestionChange()
        }

        if(currentGroup.id === "occupation_section"){
            handleOccupations()
        }

        if(currentGroup.id === "educational_formation_section"){
            handleStudyAreas()
        }

        if(currentGroup.id === "hobby_section"){
            handleHobbies()
        }

        callback && callback()
    }

    const handleDateQuestionChange = () => {
        console.log("BirthDay validation", formResponses["birthday"])
        let yearsOld = getYearsOld(formResponses["birthday"])

        if(yearsOld < 18){
            let newQuestions = [...questions]
            let foundIndex = newQuestions.findIndex( f => f.id === "electoral_question")

            if(foundIndex !== -1){
                newQuestions.splice(foundIndex, 1)
                setQuestions(newQuestions)
            }
        }
    }

    const handleOccupations = () => {
        console.log("Occupation validation...")
        let occupationResponse = formResponses["occupation"]
        if(occupationResponse){
            let idsMapped = occupationResponse.map( (m:any) => m.id )

            let newDynamicQuestions: Array<Question> = []

            idsMapped.forEach((idSelected:string, index:number) => {
                newDynamicQuestions.push(getOccupations(idSelected, index))
            })

            let newQuestions = [...questions]
            let foundIndex = newQuestions.findIndex( f => f.id === "dynamic_categories_section")

            if(foundIndex !== -1){
                newQuestions[foundIndex].questions = newDynamicQuestions
            }
        }
    }

    const handleStudyAreas = () => {
        console.log("StudyAreas validation...")
        let studyArea = formResponses["studyArea"]
        console.log(studyArea)
        if(studyArea){
            let newDynamicQuestions: Array<Question> = []

            newDynamicQuestions = [getStudyAreas(studyArea.id)]
            
            let newQuestions = [...questions]
            let foundIndex = newQuestions.findIndex( f => f.id === "educational_speciality_section")

            if(foundIndex !== -1){
                newQuestions[foundIndex].questions = newDynamicQuestions
                setFormResponses( (prevState:any) => ({...prevState, "studySpeciality": "" }))
            }
        }
    }

    const handleHobbies = () => {
        console.log("Hobbies validation...")
        let hobbyResponse = formResponses["hobby"]
        if(hobbyResponse){
            let idsMapped = hobbyResponse.map( (m:any) => m.id )

            let newDynamicQuestions: Array<Question> = []

            idsMapped.forEach((idSelected:string, index:number) => {
               newDynamicQuestions.push(getHobbies(idSelected, index))
            })

            let newQuestions = [...questions]
            let foundIndex = newQuestions.findIndex( f => f.id === "hobby_specific_section")

            if(foundIndex !== -1){
                newQuestions[foundIndex].questions = newDynamicQuestions
            }
        }
    }

    return [questions, applyFormValidations ] as const
}