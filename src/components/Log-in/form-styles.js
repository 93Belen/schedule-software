import { colors, fonts } from "../commonStyles"

export const form = {
    boxSizing: 'border-box',
    width: '50rem',
    height: '40rem',
    color: colors.white,
    background: colors.glassGreen,
    padding: '1rem',
    backgroundFilter: 'blur(10px)',
    borderRadius: 15,
    boxShadow: '0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25)',
    textAlign: 'center',
    display: 'grid',
    gridTemplateRows: '25% 25% 25% 20% 5%',
    gridTemplateColumns: '10% 80% 10%',
    gridColumn: '2',
    gridRow: '2/4',
    justifySelf: 'center',
    alignSelf: 'center',
    marginTop: '15rem'
}
export const input = {
    width: '90%',
    height: '40%',
    gridColumn: '2',
    justifySelf: 'center',
    fontSize: '1.6rem',
    fontFamily: fonts.p.fontFamily
}
export const h1 = {
    gridColumn: '2',
    fontSize: '3rem',
    fontFamily: fonts.h1.fontFamily,
    fontWeight: fonts.h1.fontWeight
}
