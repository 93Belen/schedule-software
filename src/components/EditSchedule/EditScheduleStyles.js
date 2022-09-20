import { colors, fonts } from "../commonStyles";
import { EditSchedule } from "./EditSchedule";

export const editScheduleDiv = {
    gridColumn: '2',
    gridRow: '2',
    justifySelf: 'end',
    alignSelf: 'end',
    boxSizing: 'border-box',
    height: '100%',
    width: 'fit-content',
    background: colors.glassGreen,
    color: colors.white,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(20px)',
    borderRadius: 15,
    display: 'grid',
    gridTemplateRows: '10% 15% 5% fit-content',
    gridAutoFlow: 'column',
    fontFamily: fonts.h1.fontFamily,
    fontSize: '1.4rem',
    padding: '0.5rem 0.5rem 0.5rem 3rem',
    gap: '0rem',
    overFlow: 'scroll'
}
export const editScheduleDivWeekendOption = {
    gridColumn: '2',
    gridRow: '2',
    justifySelf: 'start',
    alignSelf: 'end',
    boxSizing: 'border-box',
    height: 'fit-content',
    width: 'fit-content',
    background: colors.glassGreen,
    color: colors.white,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(20px)',
    borderRadius: 15,
    display: 'grid',
    gridTemplateRows: '10% 15% 5% fit-content',
    gridAutoFlow: 'column',
    fontFamily: fonts.h1.fontFamily,
    fontSize: '1.4rem',
    padding: '0.5rem 0.5rem 0.5rem 3rem',
    gap: '0rem',
    overFlow: 'scroll'
}
export const title = {
    boxSizing: 'border-box',
    gridRow: '2',
    display: 'grid',
    gridTemplateRows: 'repeat(2, 50%)',
    margin: '0rem',
    textAlign: 'center',
    textJustify: 'center'
}
export const day = {
    boxSizing: 'border-box',
    gridRow: '3',
    margin: '0rem',
    textAlign: 'center',
    textJustify: 'center'
}
export const namesDiv = {
    boxSizing: 'border-box',
    gridRow: '4',
    display: 'grid',
    gridTemplateRows: 'repeat(0, 1fr)',
    gridAutoFlow: 'row',
    textAlign: 'start',
    textJustify: 'center',
    width: 'fit-content',
    padding: '1.5rem 5rem',
}
