import { colors, fonts } from '../commonStyles';

export const schedule = {
    gridRow: '2',
    gridColumn: '1/4',
    width: '99%',
    height: 'fit-content',
    background: colors.glassWhite,
    boxShadow: '0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(4px)',
    borderRadius: 10,
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    fontFamily: fonts.p.fontFamily,
    fontWeight: fonts.p.fontWeight,
    fontSize: '1.8rem',
    textAlign: 'center',
    color: colors.black,
    padding: '0rem 2rem 2rem 2rem'
}
export const head = {
    fontSize: '1.5rem',
    background: colors.green,
    padding: '1rem',
    margin: '0rem',
    width: '100%',
    backdropFilter: 'blur(4px)',
    color: colors.white
}
export const headLeft = {
    fontSize: '1.5rem',
    background: colors.green,
    padding: '1rem 2rem 1rem 1rem',
    margin: '0rem 0rem 0rem -2rem',
    width: '100%',
    backdropFilter: 'blur(4px)',
    color: colors.white,
    borderRadius: '10px 0 0 0'
}
export const headRight = {
    fontSize: '1.5rem',
    background: colors.green,
    padding: '1rem',
    margin: '0rem',
    width: '100%',
    backdropFilter: 'blur(4px)',
    color: colors.white,
    borderRadius: '0 10px 0 0'
}