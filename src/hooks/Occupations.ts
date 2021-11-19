import { Question } from "../model/Survey/SurveyModel";
import { PrivateEmployeeCategories } from "../model/Survey/occupationCategories/PrivateEmployeeCategories";
import { PublicEmployeeCategories } from "../model/Survey/occupationCategories/PublicEmployeeCategories";
import { StudentCategories } from "../model/Survey/occupationCategories/StudentCategories";
import { UnEmployeeCategories } from "../model/Survey/occupationCategories/UnEmployeeCategories";
import { InformalEmployeeCategories } from "../model/Survey/occupationCategories/InformalEmployeeCategories";
import { HomeEmployeeCategories } from "../model/Survey/occupationCategories/HomeEmployeeCategories";
import { OwnBusinessEmployeeCategories } from "../model/Survey/occupationCategories/OwnBussinessEmployeeCategories";
import { FreeLancerCategories } from "../model/Survey/occupationCategories/FreeLancerCategories";
import { TeacherCategories } from "../model/Survey/occupationCategories/TeacherCategories";

export function getOccupations(idSelected: string, index: number): Question {
    const obj: { [key: string]: any } = {
        private_employee: {
            id: `dinamy_category_${index}`,
            title: "¿Cual es el área de especialidad de tu trabajo en el sector privado?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: PrivateEmployeeCategories,
            field: `dinamy_category_${index}`
        },
        public_employee: {
            id: `dinamy_category_${index}`,
            title: "¿Cual es el área de especialidad de tu trabajo en sector publico?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: PublicEmployeeCategories,
            field: `dinamy_category_${index}`
        },
        student: {
            id: `dinamy_category_${index}`,
            title: "¿En qué nivel te encuentras estudiando actualmente?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: StudentCategories,
            field: `dinamy_category_${index}`
        },
        unemployed: {
            id: `dinamy_category_${index}`,
            title: "¿Cuál es tu estatus actualmente como desempleado?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: UnEmployeeCategories,
            field: `dinamy_category_${index}`
        },
        informal_employee: {
            id: `dinamy_category_${index}`,
            title: "¿En que tipo del sector informal participas?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: InformalEmployeeCategories,
            field: `dinamy_category_${index}`
        },
        home_employee: {
            id: `dinamy_category_${index}`,
            title: "¿Qué tipo de labor realizas como trabajo doméstico/cuidado?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: HomeEmployeeCategories,
            field: `dinamy_category_${index}`
        },
        own_business: {
            id: `dinamy_category_${index}`,
            title: "¿En que tipo de negocio particular/familiar participas?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: OwnBusinessEmployeeCategories,
            field: `dinamy_category_${index}`
        },
        freelancer: {
            id: `dinamy_category_${index}`,
            title: "¿En qué área te especializas/ejerces como trabajador freelancer?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: FreeLancerCategories,
            field: `dinamy_category_${index}`
        },
        teacher: {
            id: `dinamy_category_${index}`,
            title: "¿Cuál es tu área de actividad actualmente dentro de la docencia/academia?",
            type: "select",
            placeHolder: "Selecciona una opción",
            options: TeacherCategories,
            field: `dinamy_category_${index}`
        }

    }

    return obj[idSelected];
}
