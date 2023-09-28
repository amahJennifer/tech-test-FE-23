import React from "react";
import { Tbd } from "../styles";
import { formattedDate } from "../utils";
import StatusPill from "./StatusPill";

import styled from "styled-components";

type StateDocument = {
    dateAndTime: string;
    status: string;
    username: string;
    value: string;
}

const Item =({ payout }: { payout: StateDocument})=> {
    return (
        <TableRow key={payout.username}>
            <Tbd>{payout.username}</Tbd>
            <Tbd>{formattedDate(payout.dateAndTime, payout.status)}</Tbd>
            <Tbd>
                <StatusPill status={payout.status}/>
            </Tbd>
            <Tbd $isValue>{payout.value}</Tbd>
        </TableRow>
    );
}



export default Item


const TableRow = styled.tr`
display: flex !important;
  
  @media (max-width: 1000px){
    display: block;
  }
`;
