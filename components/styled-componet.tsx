import styled from "styled-components";

const alt = '#1da9eb';
const prim = '#96bd42';

export const Button = styled.button`
    background: ${props => props.type === 'sec' ? alt : prim};
    font-sixe: 13px;
    padding: 10px 30px;
`;

export const Container = ({className = '', children}) => {
    return (
        <div className={`container mx-auto md:px-32 px-6 py-20 ${className}`}>
            {children}
        </div>
    )
}