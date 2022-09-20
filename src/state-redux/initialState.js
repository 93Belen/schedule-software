// export const initialState = {
//     workers: [
//             {
//                 name: 'Belen Garcia',
//                 payPerHour: 15,
//                 departments: ['Department 01', 'Department 02', 'Department 03'],
//                 hoursPerWeek: 28,
//                 hoursLeft: 0,
//                 lastShiftFinishAt: 0,
//                 setSchedule: {
//                     wednesday: '8/16',
//                     saturday: '8/16',
//                     sunday: '8/16'
//                 }
//             },
//             {
//                 name: 'Ben Kingston',
//                 payPerHour: 15,
//                 departments: ['Department 01', 'Department 02', 'Department 03'],
//                 hoursPerWeek: 28,
//                 hoursLeft: 0,
//                 lastShiftFinishAt: 0,
//                 setSchedule: {
//                     monday: '6/14',
//                     saturday: '9/5',
//                     sunday: '6/14'
//                 }
//             },
//             {
//                 name: 'Laura Perez',
//                 payPerHour: 17,
//                 departments: ['Department 03'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             },
//             {
//                 name: 'Angela Rodriguez',
//                 payPerHour: 15,
//                 departments: ['Department 01', 'Department 03'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             },
//             {
//                 name: 'Troy Girona',
//                 payPerHour: 20,
//                 departments: ['Department 01', 'Department 03'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             },
//             {
//                 name: 'Antonio Fernandez',
//                 payPerHour: 18,
//                 departments: ['Department 01', 'Department 02', 'Department 03'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 0,
//                 lastShiftFinishAt: 0,
//                 setSchedule: {
//                     tuesday: '14/22',
//                     wednesday: '14/22',
//                     thursday: '14/22',
//                     friday: '14/22'
//                 }
//             },
//             {
//                 name: 'Blanca Garcia',
//                 payPerHour: 16,
//                 departments: ['Department 01', 'Department 02', 'Department 03'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             },
//             {
//                 name: 'Oslo Zamora',
//                 payPerHour: 15,
//                 departments: ['Department 01', 'Department 02'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             },
//             {
//                 name: 'Ester Sola',
//                 payPerHour: 15,
//                 departments: ['Department 01', 'Department 02', 'Department 03'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             },
//             {
//                 name: 'Tono Zamora',
//                 payPerHour: 17,
//                 departments: ['Department 02', 'Department 03'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             },
//             {
//                 name: 'Troy Lupe',
//                 payPerHour: 15,
//                 departments: ['Department 01', 'Department 02', 'Department 03'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             },
//             {
//                 name: 'Maria Fernandez',
//                 payPerHour: 20,
//                 departments: ['Department 01', 'Department 02', 'Department 03'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             }, {
//                 name: 'Raul Zaragoza',
//                 payPerHour: 19,
//                 departments: ['Department 01', 'Department 02'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             },
//             {
//                 name: 'Blanca Ruiz',
//                 payPerHour: 16,
//                 departments: ['Department 01', 'Department 02', 'Department 03'],
//                 hoursPerWeek: 40,
//                 hoursLeft: 40,
//                 lastShiftFinishAt: 0,
//                 setSchedule: null
//             },
//         ],
//     data: {
//         weekBudget: 600,
//         budgetLeft: 600,
//         departments: [],
//     },
//     clickedELement: '',
//     weekSchedule: {
//         monday: {},
//         tuesday: {},
//         wednesday: {},
//         thursday: {},
//         friday: {},
//         saturday: {},
//         sunday: {} 
// }
// }







export const initialState = {
    workers: [
            {
                name: 'Default Worker',
                payPerHour: 0,
                departments: ['Department 01', 'Department 02', 'Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
            {
                name: 'Belen Garcia',
                payPerHour: 15,
                departments: ['Department 01', 'Department 02', 'Department 03'],
                hoursPerWeek: 28,
                hoursLeft: 0,
                lastShiftFinishAt: 0,
                setSchedule: {
                    wednesday: '8/16',
                    saturday: '8/16',
                    sunday: '8/16'
                }
            },
            {
                name: 'Ben Kingston',
                payPerHour: 15,
                departments: ['Department 01', 'Department 02', 'Department 03'],
                hoursPerWeek: 28,
                hoursLeft: 0,
                lastShiftFinishAt: 0,
                setSchedule: {
                    monday: '6/14',
                    saturday: '9/5',
                    sunday: '6/14'
                }
            },
            {
                name: 'Laura Perez',
                payPerHour: 17,
                departments: ['Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
            {
                name: 'Angela Rodriguez',
                payPerHour: 15,
                departments: ['Department 01', 'Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
            {
                name: 'Troy Girona',
                payPerHour: 20,
                departments: ['Department 01', 'Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
            {
                name: 'Antonio Fernandez',
                payPerHour: 18,
                departments: ['Department 01', 'Department 02', 'Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 0,
                lastShiftFinishAt: 0,
                setSchedule: {
                    tuesday: '14/22',
                    wednesday: '14/22',
                    thursday: '14/22',
                    friday: '14/22'
                }
            },
            {
                name: 'Blanca Garcia',
                payPerHour: 16,
                departments: ['Department 01', 'Department 02', 'Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
            {
                name: 'Oslo Zamora',
                payPerHour: 15,
                departments: ['Department 01', 'Department 02'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
            {
                name: 'Ester Sola',
                payPerHour: 15,
                departments: ['Department 01', 'Department 02', 'Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
            {
                name: 'Tono Zamora',
                payPerHour: 17,
                departments: ['Department 02', 'Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
            {
                name: 'Troy Lupe',
                payPerHour: 15,
                departments: ['Department 01', 'Department 02', 'Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
            {
                name: 'Maria Fernandez',
                payPerHour: 20,
                departments: ['Department 01', 'Department 02', 'Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            }, {
                name: 'Raul Zaragoza',
                payPerHour: 19,
                departments: ['Department 01', 'Department 02'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
            {
                name: 'Blanca Ruiz',
                payPerHour: 16,
                departments: ['Department 01', 'Department 02', 'Department 03'],
                hoursPerWeek: 40,
                hoursLeft: 40,
                lastShiftFinishAt: 0,
                setSchedule: null
            },
        ],
    data: {
        weekBudget: 600,
        budgetLeft: 600,
        departments: ['Department 01', 'Department 02'],
    },
    clickedELement: '',
    weekSchedule: {
        monday: {
            'Department 01': {
                '6/14': 'Ben Kingston',
                '8/16': null,
            },
            'Department 02': {
                '9/5': null
            }   
        },
        tuesday: {
            'Department 01': {
                '6/14': null,
                '8/16': null
            },
            'Department 02': {
                '9/5': null
            }   
        },
        wednesday: {
            'Department 01': {
                '6/14': null,
                '8/16': 'Belen Garcia'
            },
            'Department 02': {
                '9/5': null
            }   
        },
        thursday: {
            'Department 01': {
                '6/14': null,
                '8/16': null
            },
            'Department 02': {
                '9/5': null
            }   
        },
        friday: {
            'Department 01': {
                '6/14': null,
                '8/16': null
            },
            'Department 02': {
                '9/5': null
            }   
        },
        saturday: {
            'Department 01': {
                '6/14': null,
                '8/16': null
            },
            'Department 02': {
                '9/5': 'Ben Kingston'
            }  
        },
        sunday: {
            'Department 01': {
                '6/14': null,
                '8/16': 'Belen Garcia'
            },
            'Department 02': {
                '9/5': null
            } 
        }
}
}