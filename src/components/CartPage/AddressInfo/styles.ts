import styled from "styled-components";

export const FormAddress = styled.form(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '200px 276px 42px',
    gap: '12px 16px',
}))

interface InputProps {
    start: { width: 'sm' | 'md' | 'lg' };
    end: { width: 'sm' | 'md' | 'lg' };
}

const InputSizeEnd = ({ end }: InputProps): string => {
    switch (end.width) {
        case "sm": {
            return '2';
        }
        case "md": {
            return '3';
        }
        case "lg": {
            return '4';
        }
        default: {
            return '1';
        }
    }
};

const InputSizeStart = ({ start }: InputProps): string => {
    switch (start.width) {
        case "sm": {
            return '1';
        }
        case "md": {
            return '2';
        }
        case "lg": {
            return '3';
        }
        default: {
            return '1';
        }
    }
};

export const InputAddress = styled.input<InputProps>(({ theme, start, end }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '12px',
    gap: '4px',
    background: theme.color["base-input"],
    borderRadius: '4px',
    border: `1px solid ${theme.color["base-button"]}`,

    gridColumnStart: InputSizeStart({ start }),
    gridColumnEnd: InputSizeEnd({ end }),

    '&:focus':{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }
}));