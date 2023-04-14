import styled from "styled-components";

export const Container = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '16px',
    gap: '12px',
    border: '0',
    width: '178.67px',
    height: '51px',
    background: theme.color["base-button"],
    borderRadius: '6px',
    color: theme.color["base-text"],
    fontSize: theme.textSizes["components-button-s"],
    textTransform: 'uppercase',

    '&:hover': {
        background: theme.color["base-hover"],
        color: theme.color["base-subtitle"],
    },
    
    '&:input:checked + label': {
        background: theme.color["purple-light"],
        border: `1px solid ${theme.color["purple-dark"]} `,
    },

    
    // '&:after': {
    //     content: "",
    //     clear: 'both',
    // }

    
    // '&:after':{
    //     content: '""',
    //     clear: 'both',
    // },

    // '&:label':{
    //     // background: '#fff no-repeat center center',
    //     // bottom: '1px',
    //     // cursor: 'pointer',
    //     // display: 'block',
    //     // fontSize: '0',
    //     // left: '1px',
    //     // position: 'absolute',
    //     // right: '1px',
    //     // textIndent: '100%',
    //     // top: '1px',
    //     // whiteSpace: 'nowrap',
    // }
    }))