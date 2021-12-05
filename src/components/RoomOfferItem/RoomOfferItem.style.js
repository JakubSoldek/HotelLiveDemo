import styled from "styled-components";


export const RoomItem = styled.div`

width: 100%;
@media (min-width: 1024px) {
        width: 50%; 
}

img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
}

a{
    text-align:center;
}

.btn {
    font-size: 2rem;
    border-radius: 5rem;
    color: #faf9f9;
    background-image: linear-gradient(to right, #ff3366, #ba265d);
    margin: 1rem 0 2rem 0;
    border-style: none;
    transition: transform 0.5s;
    width: 75%;
    height: 6rem;
    align-self: center;

    :hover {
        cursor: pointer;
        background-image: linear-gradient(to right, #ba265d, #ff3366);
        transform: scale(1.05);
    }
}

.cards__item {
    display: flex;
    padding: 3rem 3rem;
    flex: 1;
    @media (max-width: 1024px) {
        padding: 1rem 0rem;
    }
}

.card {
    background-color: #faf9f9;
    border-radius: 0.5rem;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 1;
}

.card__content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
}

.card__title {
    font-size: 4rem;
    color: #777;
    font-weight: 600;
    letter-spacing: 0.3rem;
    align-self: center;
    
}

.room_size,
.room_price {
    color: #999;
    font-size: 2.3rem;
    flex: 1 1 auto;
    line-height: 1.5;
    margin: 3.25rem;
    text-align: center;
    letter-spacing: 0.1rem;
    padding-bottom: 0;
    text-transform: uppercase;
}

.stars{
    margin-top:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

`;