import React from 'react'
import styled from "styled-components";
import Tag from '../assets/images/tag.png'
import { useEffect, useState, useCallback } from "react";
import Item from "./Item";
import Search from "./Search";
import { MetaDataDocument, StateDocument } from "../types";
import {
    Button,
    LeftRightSpacer,
    Main,
    Select,
    Table,
    Tbody,
    Thd,
} from "../styles";

const API_BASE_URL =
    "https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test";

const TableContainer=()=> {
    let debounceTimeout: NodeJS.Timeout;
    const [state, setState] = useState<StateDocument[]>([]);
    const [searchText, setSearchText] = useState("");
    const [metadata, setMetadata] = useState<MetaDataDocument>({
        limit: 10,
        page: 1,
        totalCount: 0,
    });

    const handlePageChange = (newPage: number, newLimit?: number | string) => {
        setMetadata({
            ...metadata,
            page: newPage,
            limit: newLimit,
        });
    };

    const fetchData = useCallback(async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMetadata(data.metadata);
            setState(data.data);
        } catch (error) {
            if(error){
                alert('Unable to fetch data , Please try again')
            }
        }
    }, []);

    const performSearch = useCallback(
        async (searchTerm: string) => {
            if (searchTerm.trim() === "") {
                await fetchData(`${API_BASE_URL}/payouts?page=${metadata.page}&limit=${metadata.limit}`);
                return;
            }

            try {
                const response = await fetch(
                    `${API_BASE_URL}/search?query=${searchTerm}`
                );
                const searchResults = await response.json();
                setState(searchResults);
            } catch (error) {
                if(error){
                    alert('Unable to fetch data , Please try again')
                }
            }
        },
        [fetchData]
    );

    const handleSearchInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            const newSearchTerm = event.target.value;
            setSearchText(newSearchTerm);
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
            debounceTimeout = setTimeout(() => {
                performSearch(newSearchTerm);
            }, 300);
        },
        [performSearch]
    );

    useEffect(() => {
        fetchData(
            `${API_BASE_URL}/payouts?page=${metadata.page}&limit=${metadata.limit}`
        );
    }, [metadata.page, metadata.limit]);

    useEffect(() => {
        // Clean up the debounce timeout on unmount
        return () => {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
        };
    }, []);

    const isEmpty = Boolean(state.length);
    const isSearch = Boolean(searchText);

    return (
        <Main>
            <div>
                <TableDescription>
                          <img src={Tag} alt={'Tag'}/>
                             <TableDescriptionText>
                              Payout History
                </TableDescriptionText>
                          </TableDescription>
                <Search onChange={handleSearchInputChange} />

                <Table>
                    <TableHead>
                    <tr>
                        <Thd>Username</Thd>
                        <Thd>Date & Time</Thd>
                        <Thd>Status</Thd>
                        <Thd>Value</Thd>
                    </tr>
                    </TableHead>
                    <Tbody>
                        {state?.map((payout, index) => (
                            <Item payout={payout} key={"key-" + index} />
                        ))}
                        {!isEmpty ? "No record" : null}
                    </Tbody>
                </Table>
                {!isSearch ? (
                    <div>
                        <Button
                            onClick={() => handlePageChange(metadata.page - 1)}
                            disabled={metadata.page === 1}
                        >
                            Previous
                        </Button>
                        <LeftRightSpacer>
                            Page {metadata.page} of {metadata.totalCount}
                        </LeftRightSpacer>
                        <Button
                            onClick={() => handlePageChange(metadata.page + 1)}
                            disabled={metadata.page === metadata.totalCount}
                        >
                            Next
                        </Button>

                        <LeftRightSpacer> Record per page</LeftRightSpacer>
                        <Select
                            name=""
                            id=""
                            value={metadata.limit}
                            onChange={(e) => handlePageChange(metadata.page, e.target.value)}
                        >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                        </Select>
                    </div>
                ) : null}
            </div>
        </Main>
    );
}

export default TableContainer

const TableDescription = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  gap: 16px;
`
const TableDescriptionText = styled.h1`
  font-family: Inter,sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.4px;
`

const TableHead = styled.thead`
tr{
  display: flex;
}
`;


