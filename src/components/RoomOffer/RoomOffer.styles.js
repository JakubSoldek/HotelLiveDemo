import styled from "styled-components";



export const WrapperRoomOffer = styled.div`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

display: flex;
flex-wrap: wrap;

.search-input-mobile{
    display:none;
}

@media (max-width: 480px) {
    .search-input-mobile{
    display:block;
    width:100%;
    margin-bottom: 0.5rem;
    input{
        text-align:center;
        width:100%;
  padding: 1rem 2rem;
  border-radius: 50rem;
  border-style: none;
  background: #f0eeee;
  font-size: 2rem;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  outline-offset: none
        }
        input:focus{
              outline-style: none;

        }
    }
}

`;
