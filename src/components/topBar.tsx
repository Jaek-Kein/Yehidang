import styled from "@emotion/styled"



const Wrapper = styled.div`
    display:flex;
    height: 50px;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
`
const TopBar: React.FC = () => {
    return(
        <Wrapper>
            <img src={`${import.meta.env.BASE_URL}LogoGold.png`} className="w-auto h-[30px]"/>
        </Wrapper>
    )
}

export default TopBar