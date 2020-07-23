import React,{ Suspense } from 'react';
import Spinner from '../Spinner/Spinner'
const Table = React.lazy(() => import('@material-ui/core/Table'));
const TableContainer = React.lazy(() => import('@material-ui/core/TableContainer'));
const TableBody = React.lazy(() => import('@material-ui/core/TableBody'));
const TableCell = React.lazy(() => import('@material-ui/core/TableCell'));
const TableRow = React.lazy(() => import('@material-ui/core/TableRow'));
const TableHead = React.lazy(() => import('@material-ui/core/TableHead'));

export const CustomTable = props =>(
    <Suspense fallback={<div><Spinner/></div>}>
        <Table {...props}>{props.children}</Table>
    </Suspense>
)

export const CustomTableContainer = props =>(
    <Suspense fallback={<div><Spinner/></div>}>
        <TableContainer {...props}>{props.children}</TableContainer>
    </Suspense>
)

export const CustomTableBody = props =>(
    <Suspense fallback={<div><Spinner/></div>}>
        <TableBody {...props}>{props.children}</TableBody>
    </Suspense>
)

export const CustomTableCell = props =>(
    <Suspense fallback={<div><Spinner/></div>}>
        <TableCell {...props}>{props.children}</TableCell>
    </Suspense>
)

export const CustomTableRow = props =>(
    <Suspense fallback={<div><Spinner/></div>}>
        <TableRow {...props}>{props.children}</TableRow>
    </Suspense>
)

export const CustomTableHead = props =>(
    <Suspense fallback={<div><Spinner/></div>}>
        <TableHead {...props}>{props.children}</TableHead>
    </Suspense>
)