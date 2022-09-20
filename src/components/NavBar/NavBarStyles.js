import { fonts, colors } from "../commonStyles";

export const NavBarStyles = {
    boxSizing: 'border-box',
    gridColumn: '3/5',
    fontFamily: fonts.h3.fontFamily,
    fontWeight: fonts.h1.fontWeight,
    fontSize: '1.8rem',
    color: colors.black,
    width: '100%',
    height: '100%',
    padding: '4rem 0rem',
    marginLeft: '-4.3rem',
    justifyContent: 'center',
    alignContent: 'center'
}
export const ScheduleNavLinkStyles = {
    boxSizing: 'border-box',
    textDecoration: 'none',
    background: colors.white,
    color: colors.black,
    padding: '0.7rem 4.5rem',
    justifyText: 'center',
    alignText: 'center',
    borderRadius: '3px 0px 0px 3px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}

export const DataNavLinkStyles = {
    boxSizing: 'border-box',
    textDecoration: 'none',
    background: colors.white,
    color: colors.black,
    padding: '0.7rem 4.5rem',
    justifyText: 'center',
    alignText: 'center',
    borderRadius: '0px 3px 3px 0px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}
 export const ScheduleActiveStyles = {
     background: colors.orange,
     color: colors.white,
     boxSizing: 'border-box',
    textDecoration: 'none',
    padding: '0.7rem 4.5rem',
    justifyText: 'center',
    alignText: 'center',
    borderRadius: '3px 0px 0px 3px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
 }
 export const DataActiveStyles = {
    background: colors.orange,
    color: colors.white,
    boxSizing: 'border-box',
    textDecoration: 'none',
    padding: '0.7rem 4.5rem',
    justifyText: 'center',
    alignText: 'center',
    borderRadius: '0px 3px 3px 0px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
 }