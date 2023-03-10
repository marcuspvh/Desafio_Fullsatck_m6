import styled from "styled-components";


export const ContainerDashboard = styled.div`
  background-color: #000000;
  color: #F8F9FA;
  width: 100%;

.dashMain{
    width: 100%;
    height: auto;
    background-color: #212529;
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
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #121214;
    /* margin-top: 10%; */
    margin-bottom: 5px;
    

    
}

.spanDashHeader{
  margin-left: 50px;

}
.btnSair{
    background-color: #262b31;
    color: #F8F9FA;
    width: 67px;
    height: 40px;
    // border-radius: 4px black;
    // border-color: black;
    cursor: pointer;
    margin-right: 50px;
}
.btnSair:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    border: 3px solid rgb(83, 177, 231);
    border-radius: 5%;

}
.dashbody{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #121214;
    /* margin-top: 10%; */
    margin-bottom: 20px;
    flex-wrap: wrap;
    color: rgb(83, 177, 231);
}

.spanDashbody{
  height: auto;
  font-size: 2rem;
  font-weight: bold;

}
.divDashbody{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #121214;
  

}

.spanBody{
    font-size: 1.3rem;
    font-weight: bold ;
    
    // margin-top: 20px;
    margin-bottom: 10px;
    margin-right: 20px;
    margin-left: 20px;
}
.spanBody1{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10px;
  font-size: 1rem;
  
  margin-bottom: 30px;
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

@media (min-width: 320px) {
    .dashMain{
      width: 320px;
      flex-wrap: wrap; 
     }
     .spanDashbody{
      font-size: 25px;
    }
    .spanBody{
      font-size: 12px;
    }
    .tecH3{
      font-size: 12px;
    }


  }
@media (min-width: 375px) {
    .dashMain{
      width: 365px;
      flex-wrap: wrap;
     }
     .spanDashbody{
      font-size: 25px;
    }
    .spanBody{
      font-size: 12px;
    }
    .tecH3{
      font-size: 15px;
    }
  }

  @media (min-width: 425px) {
    .dashMain{
      width: 425px;
      flex-wrap: wrap;
        }
    .spanDashbody{
      font-size: 30px;
    }
    .spanBody{
      font-size: 15px;
    }
    .tecH3{
      font-size: 15px;
    }
  }
@media (min-width: 768px) {
  .dashMain{
      width: 768px;
      flex-wrap: wrap;
        }
        .spanBody{
      font-size: 15px;
    }
    .tecH3{
      font-size: 15px;
    }
  }
  @media (min-width: 1024px) {
    .dashMain{
      width: 1024px;
      flex-wrap: wrap;
        }
        .spanBody{
      font-size: 15px;
    }
    .tecH3{
      font-size: 15px;
    }
  }
  @media (min-width: 1440) {
    .dashMain{
      width: 1440px;
      flex-wrap: wrap;
        }
        .spanBody{
      font-size: 15px;
    }
    .tecH3{
      font-size: 15px;
    }
  }
`