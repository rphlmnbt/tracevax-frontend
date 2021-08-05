import React, {useMemo} from 'react';
import { useTable, useSortBy, usePagination } from 'react-table'
import { Button, Row, Col } from 'react-bootstrap'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS} from './columns'
import '../../styles/pages/Logs.css'
import { FaArrowUp, FaArrowDown, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

export const LogsTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data,
    },
        useSortBy, usePagination,
    )

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        page,
        nextPage,
        previousPage,
        pageOptions,
        state,

        prepareRow,
    } = tableInstance

    const { pageIndex } = state

    return(
        <>
        <table {...getTableProps()} className="mb-4">
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? 
                                            <IconContext.Provider value={{ style: {marginLeft: "10px"}}}>
                                                <FaArrowUp />
                                            </IconContext.Provider> : 
                                            <IconContext.Provider value={{ style: {marginLeft: "10px"}}}>
                                                <FaArrowDown />
                                            </IconContext.Provider> ): ' '}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                { page.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })
                }
                
            </tbody>
        </table>
        <div>
            <div className="pt-8">
                Page {' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </div>
            <Row className="g-2">
                <Col md>
                    <Button variant="primary btn-block"  className="submit-btn mt-1"  onClick = {() => previousPage()}>
                        <IconContext.Provider value={{ style: {marginLeft: "10px"}}}>
                            <FaArrowLeft />
                        </IconContext.Provider>
                    </Button>
                </Col>
                <Col md>
                    <Button variant="primary btn-block"  className="submit-btn mt-1" onClick = {() => nextPage()}>
                        <IconContext.Provider value={{ style: {marginLeft: "10px"}}}>
                            <FaArrowRight />
                        </IconContext.Provider>
                    </Button>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default LogsTable

