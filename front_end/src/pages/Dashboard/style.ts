import styled from "styled-components";


export const ContainerDashboard = styled.div`
  background-color: #000000;
  color: #F8F9FA;
  width: 100%;

.dashMain{
    width: 900px;
    height: auto;
    flex-wrap: wrap;
    padding: 0;
    background-color: #F8F9FA;
}

.divHomeHeader{
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: auto;
    height: 20px;
    /* margin-top: 50px; */
    
  
}

.dashHeader{

    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #121214;
    /* margin-top: 10%; */
    margin-bottom: 5px;
    
}
.btnSair{
    background-color: #262b31;
    color: #F8F9FA;
    width: 67px;
    height: 40px;
    border: none;
    cursor: pointer;
}
.btnSair:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    border: 3px solid rgb(83, 177, 231);
    border-radius: 5%;

}
.dashbody{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #121214;
    /* margin-top: 10%; */
    margin-bottom: 20px;
    flex-wrap: wrap;
}
.h4body{
    font-size: 1rem;
    color: azure;
    margin-right: 10px;
    margin-left: 10px;
}
.spanBody{
    font-size: 1.3rem;
    color: white;
    margin-top: 30px;
    margin-bottom: 20px;
}
.spanBody1{
    font-size: 0.7rem;
    color: #868E96;
}
.dashFooter{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:stretch ;
    width: 100%;
    height: 100%;
    background-color: #121214;
    /* margin-top: 10%; */
    margin-bottom: 50px;
    color: azure;
}
.pFooter{
    color: white;
    margin-bottom: 55%;
    margin-top: 50px;
}

@media (min-width: 375px) {
    .main{
      width: 365px;
      flex-wrap: wrap;
        }
  }

  @media (min-width: 425px) {
    .main{
      width: 425px;
      flex-wrap: wrap;
        }
  }
@media (min-width: 768px) {
    .main{
      width: 768px;
      flex-wrap: wrap;
        }
  }
  @media (min-width: 1024px) {
    .main{
      width: 1024px;
      flex-wrap: wrap;
        }
  }
  @media (min-width: 1440) {
    .main{
      width: 1440px;
      flex-wrap: wrap;
        }
  }
`