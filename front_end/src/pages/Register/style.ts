import styled from "styled-components";


export const ContainerRegister = styled.div`
 background-color: #000000;
color: #F8F9FA;

.kenzie{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 370px;
    height: auto;
    background-color: #000000;
    margin-top: 20%;
}
.divHeader{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

}
.spanKenzie{
    
    color: rgb(83, 177, 231);
    font-size: 1.7rem;
    font-weight: bold;
}
.btnVoltar{
    background-color: #212529;
    color: #F8F9FA;
    width: 67px;
    height: 40px;
    cursor: pointer;
    border: none;

}
.btnVoltar:hover{
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  border: 3px solid rgb(83, 177, 231);
  border-radius: 5%;
}
.container{

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 370px;
    height: auto;
    background-color: #212529;
    margin-top: 10%;
    margin-bottom: 50px;
  }
p{
color: #868E96;
font-size: 0.8rem;
}
h3{
    font-size: 1rem;
    color: #F8F9FA;
}
  .form{
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center ;
    width: 95%;
    color: aliceblue;
    margin-top: 10px;
    
  
  }
  

  .inputRegister{
  
    height: 48px;
    width: 95%;
    margin-bottom: 20px;
    background-color: #343B41;
    color: #868E96;
    font-size: 0.8rem;
    border-radius: 5px;
    border: none;
  
  }
 

  .btnCadastro{
    background-color: rgb(83, 177, 231);
    width: 95%;
    height: 50px;
    border-radius: 5px;
    border: none;
    color: aliceblue;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  h4{
    width: 95%;
    display: flex;
    justify-content: right;
    color: #868E96;
  }

  
  label{
    display: flex;
    align-items: center;
    width: 95%;
    font-size: 0.8rem;
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