import { TablePagination, useTheme } from '@mui/material';

interface IProps {
  records: any[];
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: any) => void;
}

export const Pagination = ({
  records,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}: IProps) => {
  const theme = useTheme();
  const pages = [5, 10, 25, 50, 100];

  return (
    <TablePagination
      sx={{
        background: theme.palette.mode === 'dark' ? '#2b2b2b' : '#F1F1F1',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={records.length}
      onPageChange={(e: any, newPage: any) => setPage(newPage)}
      onRowsPerPageChange={event =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        setRowsPerPage(parseInt(event.target.value, 10))! && setPage(0)
      }
    />
  );
};
