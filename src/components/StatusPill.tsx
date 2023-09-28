import React from 'react'
import styled from 'styled-components'



const StatusPill = ({status}:{status :string})=>{
    return (
        <Pill $status={status}>
            <PillText>
                {status.toLowerCase() ==='completed' ? 'Paid' : 'Pending'}
            </PillText>
        </Pill>
    )
}


const Pill = styled.div<{$status:string }>`
  background-color: ${props => props.$status.toLowerCase() === "completed" ? "#60CA57" : "#6F767E66"} !important;
  border:none;
  outline: none;
  padding: 2px 8px;
  border-radius: 6px;
  width : ${props => props.$status.toLowerCase() === "completed" ? "27px" : "55px"} 
  
`
const PillText = styled.p`text-align: center;
  font-family: Inter,sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
  margin: 0; 
  padding:0;
  color: #1A1D1F;
`


export default StatusPill
