/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { WheatGold } from '../style/colors';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Base = css`
    height: 50px;
    width: 100vw;
    background-color: ${WheatGold};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    position: fixed;
    bottom:0;
    left:0;
    z-index: 1000;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
`

const Navigation:React.FC = () => {
    return (
        <>
        <div css={Base}>
            <Icon>
                <Link to="/">Home</Link>
            </Icon>
            <Icon>
                <Link to="/description">Description</Link>
            </Icon>
            <Icon>
                Product
            </Icon>
            <Icon>
                Map
            </Icon>
        </div>
        </>
    )
}

export default Navigation;