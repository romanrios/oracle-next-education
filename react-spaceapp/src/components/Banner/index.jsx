import styled from "styled-components"

const BannerEstilizado = styled.div`
    background-image: url('/imagenes/banner.png');
    width: 100%;
    display: flex;
    align-items: center;
    padding-left:64px;
    border-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 328px;
    h1{
        font-size: 40px;
        color: white;
        max-width: 300px;
        line-height: 50px;
        letter-spacing: 1px;
        font-weight: 400;
    }
`

export const Banner = () => {
    return (
        <BannerEstilizado>
            <h1> La galería más completa del espacio</h1>
        </BannerEstilizado>
    )
}
