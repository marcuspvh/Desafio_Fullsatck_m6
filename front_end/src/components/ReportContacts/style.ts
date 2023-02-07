import styled from "styled-components";


export const ContainerReportContacts = styled.div`
background-color: #000000;
  color: #F8F9FA;
  width: 100%;
  height: auto;
  background-color: #121214;
  padding: 0;
  
.tecHeader{
    width: 100%;
    height: 60px;
    display: flex ;
    flex-direction: row;
    justify-content: space-between;

    background-color: #212529;
    align-items: center;
    position: relative;
    margin-bottom: 20px;

}
.tecSpan{
    margin-left: 50px;
    color: #F8F9FA;
    font-size: 20px;
    font-weight:bold ;
}
.btnTecAdd{
    background-color: #212529;
    color: #FFFFFF;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    font-size: 1.3rem;
    font-weight: bold;
    margin-right: 50px;
    cursor: pointer;

}

.btnTecAdd:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    border: 3px solid rgb(83, 177, 231);
    border-radius: 5%;
}
`


export const DivContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* flex-direction: row;
    justify-content: space-between;
    align-items: center; */
    list-style-type: none;

    background-color: #212529;
    padding: 0;    

.tecContainer{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #212529;
    list-style-type: none;
    padding: 0;

}

li{
    width: 90%;
    height: 49px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #121214;
    border-radius: 4px ;
    margin-top: 20px;
    color: white;
    list-style-type: none;
    
    
}
.tecH3{
    font-size: 15px;
    color: #FFFFFF;
    margin-left: 15px;

}
.leftCard{
    width: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
}

.btmRmvCard{
    font-size: 1rem;
    background: #121214;
    color: #FFFFFF;
}
.tecP{
    color: #868E96;
    font-size: 13px;

}
`

