import { colors, fonts } from "../commonStyles";

export const dataDiv = {
    boxSizing: 'border-box',
    gridColumn: '1/4',
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: '0rem',
    background: colors.glassGreen,
    color: colors.white,
    fontFamily: fonts.p.fontFamily,
    fontWeight: fonts.p.fontWeight,
    fontSize: '1.4rem',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    alignItems: 'baseline',
    backdropFilter: 'blur(15px)'
}


export const departmentsDiv = {
    boxSizing: 'border-box',
    height: '70%',
    width: '30%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: '2rem',
    gridAutoFlow: 'row'
}

export const editDataDiv = {
    boxSizing: 'border-box',
    gridRow: '2',
    gridColumn: '1/4',
    display: 'flex',
    width: '100%',
    height: '7%',
    padding: '0rem',
    background: colors.green,
    color: colors.white,
    fontFamily: fonts.p.fontFamily,
    fontWeight: fonts.p.fontWeight,
    fontSize: '1.4rem',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    alignItems: 'baseline',
    backdropFilter: 'blur(15px)'
}
