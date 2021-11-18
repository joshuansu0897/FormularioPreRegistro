import { Question } from "../model/Survey/SurveyModel";
import { ArtisticHobbies } from "../model/Survey/hobbies/ArtisticHobbies";
import { PoliticHobbies } from "../model/Survey/hobbies/PoliticHobbies";
import { SportHobbies } from "../model/Survey/hobbies/SportHobbies";
import { ONGHobbies } from "../model/Survey/hobbies/ONGHobbies";
import { HelpGroupHobbies } from "../model/Survey/hobbies/HelpGroupHobbies";
import { CommunityHobbies } from "../model/Survey/hobbies/CommunityHobbies";

export function getHobbies(idSelected: string, index: number): Question {
    const obj: { [key: string]: any } = {
        "hobby_artistic": {
            id: `hobby_speciality_${index}`,
            title: "Especifica tu especialidad artistica",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: ArtisticHobbies,
            field: `hobby_speciality_${index}`
        },
        "hobby_politic": {
            id: `hobby_speciality_${index}`,
            title: "Especifica tu especialidad politica",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: PoliticHobbies,
            field: `hobby_speciality_${index}`
        },
        "hobby_sports": {
            id: `hobby_speciality_${index}`,
            title: "Especifica tu especialidad deportiva",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: SportHobbies,
            field: `hobby_speciality_${index}`
        },
        "hobby_ong": {
            id: `hobby_speciality_${index}`,
            title: "Especifica tu especialidad en una ONG",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: ONGHobbies,
            field: `hobby_speciality_${index}`
        },
        "hobby_help_group": {
            id: `hobby_speciality_${index}`,
            title: "Especifica tu especialidad en el grupo de ayuda",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: HelpGroupHobbies,
            field: `hobby_speciality_${index}`
        },
        "hobby_community": {
            id: `hobby_speciality_${index}`,
            title: "Especifica tu especialidad en labor comunitaria",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: CommunityHobbies,
            field: `hobby_speciality_${index}`
        },
    }

    return obj[idSelected];
}
