import { Question } from "../model/Survey/SurveyModel";
import { SocialAdminSciences } from "../model/Survey/studyAreas/SocialAdminSciences";
import { SocialBehaviorSciences } from "../model/Survey/studyAreas/SocialBehaviorSciences";
import { EngineerManufacturer } from "../model/Survey/studyAreas/EngineerManufacturer";
import { Education } from "../model/Survey/studyAreas/Education";
import { NaturalExactScience } from "../model/Survey/studyAreas/NaturalExactScience";
import { MathStatistic } from "../model/Survey/studyAreas/MathStatistic";
import { Services } from "../model/Survey/studyAreas/Services";
import { ArtHumanity } from "../model/Survey/studyAreas/ArtHumanity";
import { Health } from "../model/Survey/studyAreas/Health";
import { AgronomyVeterinary } from "../model/Survey/studyAreas/AgronomyVeterinary";

export function getStudyAreas(idSelected: string): Question {
    const obj: { [key: string]: any } = {
        "social_sciences_admin": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: SocialAdminSciences,
            field: "studySpeciality"
        },
        "social_sciences_behavior": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: SocialBehaviorSciences,
            field: "studySpeciality"
        },
        "engineering_manufacture_construction": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: EngineerManufacturer,
            field: "studySpeciality"
        },
        "education": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: Education,
            field: "studySpeciality"
        },
        "natural_exact_sciences": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: NaturalExactScience,
            field: "studySpeciality"
        },
        "math_statistic": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: MathStatistic,
            field: "studySpeciality"
        },
        "services": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: Services,
            field: "studySpeciality"
        },
        "art_humanity": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: ArtHumanity,
            field: "studySpeciality"
        },
        "health": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: Health,
            field: "studySpeciality"
        },
        "agronomy_veterinary": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: AgronomyVeterinary,
            field: "studySpeciality"
        },
        "other_study_area": {
            id: "educational_speciality_questions",
            title: "¿Selecciona tu especialidad?",
            type: "input",
            placeHolder: "Escriba su especialidad",
            field: "studySpeciality"
        }

    }

    return obj[idSelected];
}
