/* eslint-disable react/no-array-index-key */
import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { Pagination } from './Pagination';

type TableColumn<Entry> = {
  title: string;
  field: keyof Entry;
  Cell?({ entry }: { entry: Entry }): React.ReactElement;
  CustomHeader?: () => React.ReactElement;
  colSpan?: number;
  color?: boolean;
};

export type TableProps<Entry> = {
  data: Entry[];
  columns: TableColumn<Entry>[];
  loading?: boolean;
  width?: string;
  rowsPerPage?: 5 | 10 | 25 | 50 | 100;
  fontSize?: number;
  headerFontSize?: number;
};

export const CustomTable = <Entry extends { id: string }>({
  data,
  columns,
  loading = false,
  rowsPerPage: defaultRowsPerPage = 5,
  width = '200px',
  fontSize = 15,
  headerFontSize = 15
}: TableProps<Entry>) => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const dataAfterFiltering = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            tableLayout: 'fixed',
            marginTop: '24px',
            background: theme.palette.background.default,
            '& thead th': {
              fontWeight: '600',
              fontSize: isMobile ? '14px' : '1rem',
              textAlign: 'center'
            },
            '& tbody td': {
              fontWeight: '350',
              width: '100%',
              fontSize: isMobile ? '14px' : '1rem',
              textAlign: 'center',
              padding: '4px'
            }
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell sx={{ width }} colSpan={column.colSpan} key={column.title + index} scope="col">
                  {column.CustomHeader ? (
                    <column.CustomHeader />
                  ) : (
                    <Typography sx={{ fontSize: headerFontSize, fontWeight: 'bold' }}>{column.title}</Typography>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <>
                <TableRow>
                  <TableCell colSpan={9}>
                    <Skeleton animation="wave" width="100%" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={9}>
                    <Skeleton animation="wave" width="100%" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={9}>
                    <Skeleton animation="wave" width="100%" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={9}>
                    <Skeleton animation="wave" width="100%" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={9}>
                    <Skeleton animation="wave" width="100%" />
                  </TableCell>
                </TableRow>
              </>
            ) : (
              dataAfterFiltering.map((entry: any, entryIndex: any) => (
                <TableRow
                  key={entry?.id || entryIndex}
                  sx={{
                    background: 'transparent'
                  }}
                >
                  {columns.map(({ Cell, field, title, colSpan, color }, columnIndex) => (
                    <TableCell
                      sx={{
                        width,
                        color: color ? entry.color : ''
                      }}
                      key={title + columnIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      colSpan={colSpan}
                    >
                      {Cell ? <Cell entry={entry} /> : <Typography sx={{ fontSize }}>{entry[field]}</Typography>}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination page={page} setPage={setPage} records={data} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
    </>
  );
};
