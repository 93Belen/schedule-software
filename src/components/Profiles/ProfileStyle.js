import { colors, fonts } from '../commonStyles';


export const profileStyle = {
    boxSizing: 'border-box',
    width: '100%',
    height: '90%',
    justifySelf: 'center',
    borderRadius: 20,
    background: colors.glassWhite,
    backdropFilter: 'blur(15px)',
    color: colors.black,
    fontFamily: fonts.h2.fontFamily,
    fontWeight: fonts.p.fontWeight,
    fontSize: '1.4rem',
    display: 'grid',
    gridTemplateRows: '20% 25% 50%',
    padding: '1rem',
    gap: '1rem'
}
export const nameDiv = {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '90% 10%',
    gridTemplateRows: '50% 45%',
    textJustify: 'center'
}
export const departmentDiv = {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateRows: '25% 25% 25% 25%',
    gridTemplateColumns: 'repeat(3, 1fr)'
}
export const requestDiv = {
    boxSizing: 'border-box',
    height: '90%',
    width: '100%',
    display: 'grid',
    gridTemplateRows: '30% 70%',
    textAlign: 'center'
}
export const tableHead = {
    background: colors.green,
    color: colors.white,
    borderRadius: '2px 2px 0px 0px',
    width: '100%'
}
export const addProfileStyle = {
    boxSizing: 'border-box',
    gridRow: '2',
    gridColumn: '2',
    width: '70%',
    height: '20%',
    alignSelf: 'end',
    justifySelf: 'center',
    borderRadius: 20,
    background: colors.glassGreen,
    backdropFilter: 'blur(15px)',
    color: colors.white,
    fontFamily: fonts.h2.fontFamily,
    fontWeight: fonts.p.fontWeight,
    fontSize: '1.8rem',
    display: 'grid',
    gridTemplateRows: ' 6% repeat(6, 10%)',
    gridTemplateColumns: '40% 60%',
    padding: ' 2rem 4rem',
    gap: '2rem',
    textAlign: 'start'
}
export const addTMInput = {
    fontSize: '1.8rem',
    fontFamily: fonts.h3.fontFamily
}
export const addTMh3 = {
    alignSelf: 'center'
}
