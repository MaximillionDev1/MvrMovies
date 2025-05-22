import styled from "styled-components";

export const Container = styled.div`
padding: 0 20px;
overflow: hidden;

h2 {
    color: #fff;
    font-size: 24px;
    margin: 50px 0 20px 20px;

}

.swiper-wrapper {
    display: flex;
}


.swiper-slide {

    &:hover{
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
    }
}
`