import styled from "styled-components";

export const Main = styled.main`
	padding: 10px 5px;

	@media (min-width: 768px) {
		padding: 35px 51px;
	}
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin: 20px 0;
	table-layout: fixed;

	th,
	td {
		padding: 8px;
		text-align: left;
		width: 25%; /* Evenly distribute column widths */
	}

	th {
		background-color: #f0f0f0;
	}

	tbody tr:nth-child(odd) {
		background-color: rgba(
			244,
			244,
			244,
			0.5
		); /* Grayish background for odd rows */
      
	}

	tr {
		display: flex;
		width: 100%;
	}

	@media (max-width: 768px) {
		display: block;

		th,
		td,tr {
			display: block;
			width: 100%;
			box-sizing: border-box;
		}

		th {
			text-align: center;
		}
        tbody{
          tr{
            display: block !important;
          }
        }
	}
`;

export const Tbody = styled.tbody`
	display: block;
	width: 100%;
`;

export const Thd = styled.td`
	color: #6f767e;
	font-family: Inter;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 500;
	line-height: 12px;
	letter-spacing: -0.12px;
`;

export const Tbd = styled.td<{$isValue?:boolean}>`
	color: ${props => props.$isValue ? "#1A1D1F" : "#6F767E"};
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: -0.14px;
    width:25%;
    max-width:25%;
`;

export const Input = styled.input`
	padding: 0.8rem 1rem;
	border-radius: 6px;
	border: 1px solid grey;
	width: 100%;

	@media (min-width: 768px) {
		width: 50%;
	}
`;

export const SearchBox = styled.div`
  display: flex;
  width: 50%;
`;

export const Button = styled.button`
	padding: 0.7rem 1.2rem;
	font-size: 1rem;
	color: #fff;
	background-color: #999dff;
	border-radius: 6px;
	border: none;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
		filter: grayscale(100%);
		opacity: 0.7;
	}
`;

export const Select = styled.select`
	padding: 0.7rem 0.5rem;
	background-color: #999dff;
	color: #fff;
	font-family: Inter;
	font-size: 1rem;
	border: none;
	cursor: pointer;
	border-radius: 6px;
	&:focus {
		border: none;
	}
`;

export const LeftRightSpacer = styled.span`
	display: inline-block;
	margin: 0 1rem;
`;
